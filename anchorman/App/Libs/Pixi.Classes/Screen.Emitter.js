//-----------------------------------------------------------------------------
// Filename : Screen.Emitter.js
//-----------------------------------------------------------------------------
// Language : Javascript
// Date of creation : 01.04.2017
// Require: Class.js
//-----------------------------------------------------------------------------
// Set of particle emitter methods to Screen class
//-----------------------------------------------------------------------------

Class.Mixin(Screen, {

	initialize: function() {

		this.SpecialParams = this.SpecialParams.concat(['images', 'limit', 'count', 'ticks', 'interval', 'particlePosition', 'particleSpeed', 'particleAcceleration', 'particleTween']);

		Broadcast.on(this.Name + ' build child', function(child, child_params) {

			if (child_params.type === 'emitter') this.buildChildEmitter(child);

		}, this, {index: this.Name + '-Emitter'});

		Broadcast.on(this.Name + ' update', function() {

			this.updateEmitters();

		}, this, {index: this.Name + '-Emitter'});

		this.emitters = [];

		this.particlesLimitScale = Settings["particles-quality"];
		this.particlesWaveIntervalScale = Settings["particles-quality"];
		this.particlesWaveTicksScale = Settings["particles-quality"];
		this.particlesWaveCountScale = Settings["particles-quality"];

		this.optimizeWaveIntervalTo60FPS = true;

	},

	buildChildEmitter: function(emitter) {

		var child_params = emitter.params;

		emitter.particlesCount = 0;
		emitter.particlesLimit = (('limit' in child_params) ? (child_params.limit || Infinity) : 20) * this.particlesLimitScale;

		emitter.waveInterval = (child_params.interval || 100) * this.particlesWaveIntervalScale;
		emitter.waveTicks = (('ticks' in child_params) ? (child_params.ticks || 0) : 0) * this.particlesWaveTicksScale;
		emitter.waveCount = (child_params.count || 2) * this.particlesWaveCountScale;
		emitter.waveTime = 0;

		emitter.tick = 0;

		if (this.optimizeWaveIntervalTo60FPS && emitter.waveInterval && !emitter.waveTicks) emitter.waveTicks = Math.round(emitter.waveInterval / (1000 / 60));

		emitter.images = child_params.images || child_params.image;
		if (_.isString(emitter.images) && emitter.images.indexOf('#') === 0) emitter.images = this[emitter.images.substr(1)];
		if (!_.isArray(emitter.images)) emitter.images = [emitter.images];

		emitter.particlePosition = child_params.particlePosition;
		emitter.particleSpeed = child_params.particleSpeed;
		emitter.particleAcceleration = child_params.particleAcceleration;

		emitter.particleTween = child_params.particleTween;
		if (_.isString(emitter.particleTween) && emitter.particleTween.indexOf('#') === 0) emitter.particleTween = this[emitter.particleTween.substr(1)];

		emitter.paused = true;

		emitter.emit = this.bind(function() {

			if (!emitter.paused) return false;

			emitter.skipUpdate = !emitter.particleSpeed && !emitter.particleAcceleration;

			emitter.tick = 0;

			emitter.particlesCount = 0;

			this.emitters.push(emitter);

			emitter.paused = false;

		});

		emitter.pause = this.bind(function() {

			if (emitter.paused) return false;

			const emitters = [];

			this.each(this.emitters, function(e) {

				if (e !== emitter) emitters.push(e);

			});

			this.emitters = emitters;

			emitter.paused = true;

		});

		emitter.resume = this.bind(function() {

			this.emitters.push(emitter);

			emitter.paused = false;

		});

	},

	updateEmitters: function() {

		this.createEmitterParticles();

		this.updateEmitterParticlesPosition(PIXI.ticker.shared.elapsedMS / 1000);

	},

	createEmitterParticles: function() {

		this.each(this.emitters, function(emitter) {

			if (emitter.waveTicks) {

				if ((emitter.tick % emitter.waveTicks === 0) && (emitter.particlesLimit > emitter.particlesCount)) {

					emitter.waveTime = App.time;

					this.emitParticleWave(emitter);

				}

			} else {

				if ((App.time - emitter.waveTime >= emitter.waveInterval) && (emitter.particlesLimit > emitter.particlesCount)) {

					emitter.waveTime = App.time;

					this.emitParticleWave(emitter);

				}

			}

			emitter.tick++;

		}, this);

	},

	updateEmitterParticlesPosition: function(time) {

		this.each(this.emitters, function(emitter) {

			if (!emitter.skipUpdate) this.each(emitter.children, function(particle) {

				if (particle.speedX) particle.position.x += particle.speedX * time;
				if (particle.speedY) particle.position.y += particle.speedY * time;

				if (particle.accelerationX) particle.speedX += particle.accelerationX * time;
				if (particle.accelerationY) particle.speedY += particle.accelerationY * time;

				if (particle.resistanceX) particle.speedX -= particle.resistanceX * particle.speedX * time;
				if (particle.resistanceY) particle.speedY -= particle.resistanceY * particle.speedY * time;

			}, this);

		}, this);

	},

	emitParticleWave: function(emitter) {

		for (let i=0; (i < emitter.waveCount) && (!emitter.paused) && (emitter.particlesLimit > emitter.particlesCount); i++) {

			if (!this.isArray(emitter.images)) emitter.images = [emitter.images];

			let sprite = this.sample(emitter.images);

			if (typeof sprite === 'function') sprite = sprite.apply(this, [emitter]);

			if (typeof sprite === 'string') sprite = this.buildChild(emitter, {type: 'sprite', image: sprite}, true);

			if (!sprite) return;

			if (emitter.particlePosition) {

				var position = [0, 0];

				if (typeof emitter.particlePosition === 'function') position = emitter.particlePosition.apply(this, [sprite]);

				else if (emitter.particlePosition[0] === 'ellipse') position = this.getPointInsideEllipse(emitter.particlePosition[1], emitter.particlePosition[2]);

				else if (emitter.particlePosition[0] === 'rect') position = this.getPointInsideRectangle(emitter.particlePosition[1], emitter.particlePosition[2]);

				else if (emitter.particlePosition.length === 2) position = emitter.particlePosition;

				sprite.position.set(position[0], position[1]);

			}

			if (emitter.particleSpeed) {

				sprite.speedX = this.getParticleValue(emitter.particleSpeed[0]) || 0;
				sprite.speedY = this.getParticleValue(emitter.particleSpeed[1]) || 0;

			}

			if (emitter.particleAcceleration) {

				sprite.accelerationX = this.getParticleValue(emitter.particleAcceleration[0]) || 0;
				sprite.accelerationY = this.getParticleValue(emitter.particleAcceleration[1]) || 0;

			}

			if (emitter.onParticleCreate) emitter.onParticleCreate.apply(this, [emitter, sprite]);

			var particle_tweens = emitter.particleTween;

			if (typeof particle_tweens === 'function') particle_tweens = particle_tweens.apply(this, [sprite]);

			if (typeof particle_tweens === 'object') {

				var particle_tween = this.tween(particle_tweens, sprite, function(tween_object) {

					tween_object.targets[0].destroy();

					if (!emitter.paused && emitter.particlesLimit && emitter.particlesCount >= emitter.particlesLimit && emitter.children.length === 0) emitter.pause();

				});

				if (emitter.onTween) emitter.onTween.apply(this, [emitter, sprite, particle_tween]);

			}

			emitter.particlesCount++;

		}

		if (emitter.onWave) emitter.onWave.apply(this, [emitter, sprite]);

	},

	getPointInsideEllipse: function(x_length, y_length) {

		var x = this.random(-x_length/2, x_length/2);

		var y = this.random(-y_length/2, y_length/2);

		if (((x*x)/((x_length/2)*(x_length/2)) + (y*y)/((y_length/2)*(y_length/2))) <= 1) return [x, y];

		else return this.getPointInsideEllipse(x_length, y_length);

	},

	getPointInsideRectangle: function(x_length, y_length) {

		var x = this.random(-x_length/2, x_length/2);

		var y = this.random(-y_length/2, y_length/2);

		return [x, y];

	},

	getParticleValue: function(value, params) {

		if (this.isArray(value)) return this.random(value[0], value[1]);
		else if (typeof value === 'function') return value.apply(this, params || []);
		return value;

	}

});