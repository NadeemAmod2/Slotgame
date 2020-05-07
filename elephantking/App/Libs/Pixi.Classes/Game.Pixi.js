//-----------------------------------------------------------------------------
// Filename : Game.Pixi.js
//-----------------------------------------------------------------------------
// Language : Javascript
// Date of creation : 05.09.2016
// Require: Game.js
//-----------------------------------------------------------------------------
// Pixi based game logic
//-----------------------------------------------------------------------------

Class.Mixin(Game, {

	Engine: 'Pixi',

	MoveWhenInside: false,

	start: function () {

		this.resources = {};

		if (this.prepare) this.prepare();

		PIXI.settings.PRECISION_FRAGMENT = this.PrecisionFragment || PIXI.settings.PRECISION_FRAGMENT;

		//Pixi v4 observable point adjust (2018.10.25)
		if (window.PIXI && !PIXI.ObservablePoint.prototype.clone) PIXI.ObservablePoint.prototype.clone = PIXI.Point.prototype.clone;

		if (this.IsCreateGame) {

			var options = {
				clearBeforeRender: this.ClearBeforeRender,
				antialias: this.Antialias,
				roundPixels: this.RoundPixels,
				transparent: (this.StageBackgroundColor === false),
				backgroundColor: this.StageBackgroundColor
			};

			if (Settings["force-canvas-renderer"]) this.Renderer = new PIXI.CanvasRenderer(300, 300, options);

			else this.Renderer = PIXI.autoDetectRenderer(300, 300, options);

			if (this.Renderer.view.parentNode) this.Renderer.view.parentNode.removeChild(this.Renderer.view);

			this.Renderer.plugins.interaction.moveWhenInside = this.MoveWhenInside;

			this.Stage = new PIXI.Container();

			this.Stage.interactive = true;
			this.Stage.hitArea = new PIXI.Rectangle(0, 0, 10000, 10000);

			this.createEmptyTexture();

			this.addRendererEvents();

			this.addVisibilityEvents();

		}

		App.Loader = App.loadAssets(null, function() {

			Broadcast.call("Assets Preload Complete", [App.Loader, App.Assets]);

			App.create();

			App.processAssets();

			setTimeout(function() {

				App.DelayedLoader = App.loadAssets(null, function() {

					Broadcast.call("Delayed Assets Preload Complete", [App.Loader]);

					App.processAssets();

				}, {strategy: 'delayed'});

			}, 200);

		}, {strategy: 'preload'});

	},

	loadImages: function(loader, assets) {

		if (assets && assets.length > 0) {

			if (!loader.pixiLoader) loader.pixiLoader = new PIXI.loaders.Loader();

			this.each(assets, function(asset) {

				let url = asset.url;

				const quality = this.getAssetQuality(asset);

				if (quality !== false) {

					if (quality === 'medium') {

						url = url.replace('.png', '.medium.png').replace('.jpg', '.medium.jpg');

					} else if (quality === 'low') {

						url = url.replace('.png', '.low.png').replace('.jpg', '.low.jpg');

					}

				}

				if (url.indexOf('data:') !== 0) url += "?v=" + Settings["version"];

				loader.pixiLoader.add(asset.name, url, {crossOrigin: "*"});

			});

		} else {

			loader.states['image'] = 'ready';

			loader.check();

		}

	},

	loadAtlases: function(loader, assets) {

		if (assets && assets.length > 0) {

			if (!loader.pixiLoader) loader.pixiLoader = new PIXI.loaders.Loader();

			this.each(assets, function(asset) {

				var url = asset.url;

				if (asset.pako) asset.json = JSON.parse(pako.inflate(asset.pako, {to: 'string'}));

				if (asset.json) {

					if (asset.image.indexOf('data:') !== 0) {

						url = url.substr(0, url.lastIndexOf('/')) + '/' + asset.image + "?v=" + Settings["version"];

					} else {

						url = asset.image;

					}

					loader.pixiLoader.add(asset.name, url, {crossOrigin: "*"})

				} else {

					const quality = this.getAssetQuality(asset);

					if (quality !== false) {

						if (quality === 'medium') {

							url = url.replace('.json', '.medium.json');

						} else if (quality === 'low') {

							url = url.replace('.json', '.low.json');

						}

					}

					if (url.indexOf('data:') !== 0) url += "?v=" + Settings["version"];

					loader.pixiLoader.add(asset.name, url, {crossOrigin: "*"});

				}

			});

		} else {

			loader.states['atlas'] = 'ready';

			loader.check();

		}

	},

	loadBitmapFonts: function(loader, assets) {

		if (assets && assets.length > 0) {

			if (!loader.pixiLoader) loader.pixiLoader = new PIXI.loaders.Loader();

			this.each(assets, function(asset) {

				loader.pixiLoader.add(asset.name, asset.url, {crossOrigin: "*"})

			});

		} else {

			loader.states['bitmap-font'] = 'ready';

			loader.check();

		}

	},

	loadSounds: function(loader, assets) {

		if (assets && assets.length > 0) {

			if (!loader.pixiLoader) loader.pixiLoader = new PIXI.loaders.Loader();

			if (!PIXI.sound) throw new Error('PIXI.sound not found.');

			this.each(assets, function(asset) {

				var url = asset.url;

				if (url.indexOf('data:') !== 0) {

					const quality = this.getAssetQuality(asset);

					if (quality !== false) {

						if (quality === 'medium') {

							url = url.replace('.{ogg,mp3}', '.64kbps.{ogg,mp3}');

						} else if (quality === 'low') {

							url = url.replace('.{ogg,mp3}', '.32kbps.{ogg,mp3}');

						}

					}

				}

				loader.pixiLoader.add(asset.name, url, {crossOrigin: "*"})

			});

		} else {

			loader.states['sound'] = 'ready';

			loader.check();

		}

	},

	loadSources: function(loader) {

		if (loader.pixiLoader) {

			loader.pixiLoader.on("progress", function () {

				Broadcast.call('Assets Preload Progress', [loader]);

			});

			loader.pixiLoader.load((pixi_loader, resources) => {

				this.each(resources, function (item, index) {

					App.resources[index] = item;

					if (App.Assets[index]) {

						App.Assets[index].data = item;
						App.Assets[index].state = 'loaded';

					} else {

						App.Assets[index] = {
							data: item,
							state: 'loaded'
						};

					}

				});

				loader.states['image'] = 'ready';
				loader.states['atlas'] = 'ready';
				loader.states['bitmap-font'] = 'ready';
				loader.states['sound'] = 'ready';

				loader.check();

			});

		}

	},

	processAssets: function() {

		if (MRAID.isViewable) {

			this.each(App.Assets, function (asset) {

				if (asset.processed) return;

				if (asset.type === 'sound') {

					if (asset.autoplay) {

						if (asset.state === 'loaded') {

							asset.data.sound.loop = !!asset.loop;
							asset.data.sound.volume = asset.volume || 1;
							asset.data.sound.play();

							asset.processed = true;

						}

					} else {

						asset.processed = true;

					}

				} else {

					asset.processed = true;

				}

			});

		} else {

			MRAID.onViewable(function() {

				App.processAssets();

			}, "App Process Assets");

		}

	},

	create: function() {

		this.time = 0;

		var game = this;

		this.each(this.Screens, function (screen) {

			screen.build();

		}, this);

		window.addEventListener('resize', function () {

			game.resize(false);

		});

		this.resize(true);

		this.ready();

	},

	startTicker: function() {

		PIXI.ticker.shared.add(this.update, this);

	},

	update: function() {

		this.time = PIXI.ticker.shared.lastTime;

		if (Settings["viewport-size-protection"]) {

			let old_size = this._vewport_size;

			let new_size = this._vewport_size = MRAID.getSize();

			if (old_size && new_size && (old_size.width !== new_size.width || old_size.height !== new_size.height)) {

				this.resize(false);

			}

		}

		Broadcast.call("Game Update");

		if (this.Renderer) this.Renderer.render(this.Stage);

	},

	//Draw all textures first time, so all textures will be cached in memory and animation will be more smooth
	cacheScreenTextures: function() {

		var container = new PIXI.Container();

		container.cached_textures_hash = {};

		this.each(PIXI.utils.TextureCache, function(texture, name) {

			if (!container.cached_textures_hash[name]) {

				var sprite = container.cached_textures_hash[name] = new PIXI.Sprite(texture);

				sprite.alpha = 0.001;

				container.addChild(sprite);

			}

		});

		this.each(this.Screens, function(screen) {

			this.each(screen.Assets, function(asset) {

				if (asset.type === 'web-font' && !container.cached_textures_hash['web-font-' + asset.name]) {

					var sprite = container.cached_textures_hash['web-font-' + asset.name] = new PIXI.Text('test 123', {fontFamily: asset.name, fontSize: '50px', fill: 0xff0000});

					sprite.alpha = 0.001;

					container.addChild(sprite);

				}

			});

		});

		this.Renderer.render(container);

	},

	resize: function (is_initial_resize) {

		var width = window.innerWidth,
			height = window.innerHeight,
			left = 0,
			top = 0;

		if (window.MRAID) {

			var size = MRAID.getSize();

			width = size.width;
			height = size.height;
			left = size.left;
			top = size.top;

		}

		this.IsLandscape = width > height;

		this.IsPortrait = !this.IsLandscape;

		this.Orientation = this.IsLandscape ? 'Landscape' : 'Portrait';

		this.Width = width * this.PixelRatio;
		this.Height = height * this.PixelRatio;

		if (this.Width * this.Height > this.MaximumCanvasSize) {

			var scale = this.MaximumCanvasSize / (this.Width * this.Height);

			this.Width *= scale;
			this.Height *= scale;

		}

		this.CenterX = Math.round(this.Width / 2);
		this.CenterY = Math.round(this.Height / 2);

		this.Scale = [this.Width / this.ResolutionWidth, this.Height / this.ResolutionHeight];

		Broadcast.call("Game Resize", [is_initial_resize]);

		if (this.Renderer) this.Renderer.resize(this.Width, this.Height);

		if (this.Renderer) {

			this.Renderer.view.style.position = 'fixed';
			this.Renderer.view.style.width = width + 'px';
			this.Renderer.view.style.height = height + 'px';
			this.Renderer.view.style.left = left + 'px';
			this.Renderer.view.style.top = top + 'px';

		}

	},

	play: function(name, settingsOrVolume, is_loop) {

		if (this.resources[name]) {

			if (typeof settingsOrVolume === 'object') return PIXI.sound.play(name, settingsOrVolume);
			else return PIXI.sound.play(name, {loop: !!is_loop, volume: settingsOrVolume || 1});

		}

		return false;

	},

	addRendererEvents: function() {

		if (App.IsTouchDevice) {

			this.Stage.on("touchstart", function(e) {

				Broadcast.call("Stage Press Down", [App.Stage, e]);

			}, false);

			this.Stage.on("touchend", function(e) {

				Broadcast.call("Stage Press Up", [App.Stage, e]);

			}, false);

			this.Stage.on("touchmove", function(e) {

				Broadcast.call("Stage Press Move", [App.Stage, e]);

			}, false);

		} else {

			this.Stage.on("mousedown", function(e) {

				Broadcast.call("Stage Press Down", [App.Stage, e]);

			}, false);

			this.Stage.on("mouseup", function(e) {

				Broadcast.call("Stage Press Up", [App.Stage, e]);

			}, false);

			this.Stage.on("mousemove", function(e) {

				Broadcast.call("Stage Press Move", [App.Stage, e]);

			}, false);

		}

	},

	addVisibilityEvents: function() {

		let visibility_change = "visibilitychange";
		let state = "visibilityState";

		if (typeof document.webkitHidden !== "undefined") {

			visibility_change = "webkitvisibilitychange";
			state = "webkitVisibilityState";

		}

		document.addEventListener(visibility_change, function() {

			if (PIXI.sound) {

				if (document[state] === 'hidden') PIXI.sound.muteAll();
				else if (document[state] === 'visible') PIXI.sound.unmuteAll();

			}

		});

	},

	createEmptyTexture: function() {

		var canvas = document.createElement('canvas');

		canvas.width = 1;
		canvas.height = 1;

		this.emptyTexture = PIXI.Texture.fromCanvas(canvas);

	}

});