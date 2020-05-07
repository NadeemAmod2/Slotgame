//-----------------------------------------------------------------------------
// Filename : Screen.Tween.js
//-----------------------------------------------------------------------------
// Language : Javascript
// Date of creation : 05.09.2016
// Require: Screen.js
//-----------------------------------------------------------------------------
// Tween animations functionality for Screens
//-----------------------------------------------------------------------------

Class.Mixin(Screen, {

	DefaultEase: Power0.easeNone,

	initialize: function() {

		Broadcast.on(this.Name + ' build', function() {

			//'this' here == instance of Screen class

			if (!this.Tweens) this.Tweens = {};

		}, this, {index: this.Name + '-Tween'});

	},

	tween: function (tween_name, targets, next, options) {

		if (!this.isArray(targets)) targets = [targets];

		if (!options) options = {};

		var tween_props = this.Tweens[tween_name];

		if (!tween_props) {

			if (this.isArray(tween_name)) tween_name = {to: tween_name};

			if (this.isObject(tween_name)) {

				tween_props = tween_name;

				tween_name = JSON.stringify(tween_name);

			}

		}

		if (!tween_props) throw new Error('There are no tween with name "' + tween_name + '". Look at ' + this.Name + ' > .tween()');

		if (!tween_props.name) tween_props.name = this.Name.toLowerCase();

		var tween_object = options.tweenObject || {};

		tween_object.targets = targets;
		tween_object.props = tween_props;
		tween_object.next = next;
		tween_object.options = options;
		tween_object.tweens = [];
		tween_object.timeouts = [];
		tween_object.updateCallbacks = {};

		if (!tween_object.startingProps) tween_object.startingProps = tween_props;

		if (tween_object.startingProps.update) tween_object.updateCallbacks['user-defined'] = tween_object.startingProps.update;

		var _this = this;

		for (var i = 0; targets[i]; i++) {

			(function(target_original, target) {

				if (!target) {

					MRAID.log(targets, tween_object);

					throw new Error('There are no target with name "' + target_original + '". Look at ' + _this.Name + ' > .tween()');

				}

				var _tween_call = function() {

					_this._tween(target, tween_object, {
						save: ('save' in tween_object.startingProps) ? tween_object.startingProps.save : false,
						overwrite: ('overwrite' in tween_object.startingProps) ? tween_object.startingProps.overwrite : "auto",
						onUpdate: function() {
							_this.each(tween_object.updateCallbacks, function(fn) {fn.apply(_this, [target, tween_object]);});
						}
					});

				};

				if (tween_object.props.wait) tween_object.timeouts.push(setTimeout(_tween_call, tween_object.props.wait));

				else _tween_call();

			})(targets[i], targets[i] = this.isObject(targets[i]) ? targets[i] : this[targets[i]]);

		}

		tween_object.play = function(next, options) {

			if (!options) options = {};

			options.tweenObject = tween_object;

			_this.stopTween(tween_object);

			_this.tween(tween_object.props, tween_object.targets, next, options);

		};

		tween_object.stop = function() {

			_this.stopTween(tween_object);

		};

		return tween_object;

	},

	_tween: function (target, tween_object, options) {

		const tween_props = tween_object.props;

		this._tweenSet(tween_props.set, target);

		if (!tween_props.to) this._tweenEnd(tween_object);

		else {

			if (!this.isArray(tween_props.to[0])) tween_props.to = [tween_props.to];

			this.each(tween_props.to, function (to_object) {

				let tween_vars = {};

				if (to_object[1] === 'current') throw new Error('Tween "current" marker must be replaced to "initial"');

				if (to_object[1] === 'initial') to_object[1] = target.params[to_object[0]];

				if (this.isObject(to_object[1])) {

					if ('bezier' in to_object[1]) {

						tween_vars = to_object[1];

						this._tweenProperty(tween_object, target[to_object[0]], tween_vars, to_object[2], (to_object[3] || 0), to_object[4], options);

						if (to_object[1].bezier.drawPath) this.visualiseBezierPath(target, to_object[1].bezier);

					} else if ('color' in to_object[1]) {

						tween_vars = {colorProps: {}};

						target[to_object[0] + '_tw'] = this.decimalColorToHex(target[to_object[0]]);

						target[to_object[0] + '_tw_id'] = target[to_object[0] + '_tw_id'] || this.uniqueId();

						tween_vars.colorProps[to_object[0] + '_tw'] = this.decimalColorToHex(this.calculate(to_object[1].color));

						tween_object.updateCallbacks['color-prop-' + to_object[0] + '-' + target[to_object[0] + '_tw_id']] = function() {

							target[to_object[0]] = this.stringColorToDecimal(target[to_object[0] + '_tw']);

						};

						this._tweenProperty(tween_object, target, tween_vars, to_object[2], (to_object[3] || 0), to_object[4], options);

					}

				} else {

					if (target[to_object[0]] && target[to_object[0]].set) {

						if (!this.isArray(to_object[1])) to_object[1] = [to_object[1], to_object[1]];

						//console.log(target, to_object[0], target.params[to_object[0]], this.calculate(to_object[1][0], 1, 1, target.params[to_object[0]] ? target.params[to_object[0]][0] : 0), this.calculate(to_object[1][1], 1, 1, target.params[to_object[0]] ? target.params[to_object[0]][1] : 0));

						if (to_object[1][0] || to_object[1][0] === 0) tween_vars.x = this.calculate(to_object[1][0], 1, 1, target.params[to_object[0]] ? target.params[to_object[0]][0] : 0);
						if (to_object[1][1] || to_object[1][1] === 0) tween_vars.y = this.calculate(to_object[1][1], 1, 1, target.params[to_object[0]] ? target.params[to_object[0]][1] : 0);

						this._tweenProperty(tween_object, target[to_object[0]], tween_vars, to_object[2], (to_object[3] || 0), to_object[4], options);

						if (options.save && to_object[0] in target.params) {

							if (this.isArray(to_object[1])) {

								if (to_object[1][0] !== null) target.params[to_object[0]][0] = to_object[1][0];
								if (to_object[1][1] !== null) target.params[to_object[0]][1] = to_object[1][1];

							} else {

								target.params[to_object[0]] = to_object[1];

							}

						}

					} else if (to_object[0] in target) {

						tween_vars[to_object[0]] = this.calculate(to_object[1]);

						this._tweenProperty(tween_object, target, tween_vars, to_object[2], (to_object[3] || 0), to_object[4], options);

					} else {

						MRAID.log(tween_object);

						throw new Error('The are no property "' + to_object[0] + '" in tween target.');

					}

				}

			}, this);

			if (tween_props.motionBlur) {

				if (!target.filtersHash || !target.filtersHash['MotionBlurFilter']) {

					if (!target.params.filters) target.params.filters = [];

					target.params.filters.push(['MotionBlurFilter', [[0, 0], 20]]);

					this.applyParamFilter(target, target.params.filters);

				}

				if (target.filtersHash && target.filtersHash['MotionBlurFilter']) {

					target.filtersHash['MotionBlurFilter'].x = 0;
					target.filtersHash['MotionBlurFilter'].y = 0;

					this.tween({
						to: [
							['x', tween_props.motionBlur[0] + 0.01, tween_props.motionBlur[2] / 3, tween_props.motionBlur[3] || 0],
							['y', tween_props.motionBlur[1] + 0.01, tween_props.motionBlur[2] / 3, tween_props.motionBlur[3] || 0]
						],
						next: [
							['x', 0.01, tween_props.motionBlur[2] / 3, tween_props.motionBlur[2] / 3],
							['y', 0.01, tween_props.motionBlur[2] / 3, tween_props.motionBlur[2] / 3]
						],
						update: function(filter) {
							filter.velocity = [filter.x || filter.velocity.x || 0, filter.y || filter.velocity.y || 0];
						}
					}, target.filtersHash['MotionBlurFilter'], function() {

						target.filtersHash['MotionBlurFilter'].velocity = [0, 0];

					});

				}

			}

		}

	},

	_tweenSet: function(props, target) {

		if (!props) return;

		if (!this.isArray(props[0])) props = [props];

		var x, y;

		this.each(props, function(set_object) {

			if (target[set_object[0]] && target[set_object[0]].set) {

				if (!this.isArray(set_object[1])) set_object[1] = [set_object[1], set_object[1]];

				x = (set_object[1][0] || set_object[1][0] === 0) ? this.calculate(set_object[1][0], 1, 1, target.params[set_object[0]] ? target.params[set_object[0]][0] : 0) : target[set_object[0]].x;
				y = (set_object[1][1] || set_object[1][1] === 0) ? this.calculate(set_object[1][1], 1, 1, target.params[set_object[0]] ? target.params[set_object[0]][1] : 0) : target[set_object[0]].y;

				target[set_object[0]].set(x, y);

			} else if (set_object[0] in target) {

				target[set_object[0]] = this.calculate(set_object[1]);

			} else {

				MRAID.log(props, target);

				throw new Error('The are no property "' + set_object[0] + '" in tween target.');

			}

		}, this);

	},

	_tweenProperty: function (tween_object, target, props, time, delay, ease, options) {

		if (!options) options = {};

		if (tween_object.props.name && Settings['tween-factor-' + tween_object.props.name]) time *= Settings['tween-factor-' + tween_object.props.name];
		else time *= Settings['tween-factor-default'];

		props.ease = ease || this.DefaultEase || Power0.easeNone;
		props.delay = delay / 1000 || 0;
		props.overwrite = options.overwrite || "auto";
		props.onUpdate = options.onUpdate;

		props.onComplete = function() {

			if (!tween._pc_completed) {

				tween._pc_completed = true;

				this._tweenEnd(tween_object);

			}

		};

		props.onCompleteScope = this;

		var tween = TweenLite.to(target, time / 1000, props);

		tween_object.tweens.push(tween);

	},

	_tweenEnd: function(tween_object) {

		var is_completed = true;

		for (var i=0; tween_object.tweens[i]; i++) {

			if (!tween_object.tweens[i]._pc_completed) is_completed = false;

		}

		if (is_completed) {

			var _this = this;

			var _end = function() {

				if (tween_object.props.next) {

					_this.tween(tween_object.props.next, tween_object.targets, tween_object.next, _this.extend(tween_object.options, {tweenObject: tween_object}));

				} else if (tween_object.startingProps.loop) {

					var loop = tween_object.startingProps.loop,
						loops_count = tween_object.startingProps._loopsCount || 0;

					if (typeof tween_object.startingProps.loop === 'function') loop = loop.apply(_this, [tween_object]);

					if (loop && (typeof loop !== 'number' || loops_count <= loop)) {

						tween_object.startingProps._loopsCount = loops_count + 1;

						_this.tween(tween_object.startingProps, tween_object.targets, tween_object.next, _this.extend(tween_object.options, {tweenObject: tween_object}));

					}

					else if (tween_object.next) tween_object.next.apply(_this, [tween_object]);

				} else {

					if (tween_object.next) tween_object.next.apply(_this, [tween_object]);

				}

			};

			if (tween_object.props.delay) tween_object.timeouts.push(setTimeout(_end, tween_object.props.delay));

			else _end();

		}

	},

	stopTween: function (tween_object) {

		if (tween_object) {

			this.each(tween_object.tweens, function(tween) {

				tween.kill();

			});

			this.each(tween_object.timeouts, function(timeout) {

				clearTimeout(timeout);

			});

			tween_object.tweens = [];
			tween_object.timeouts = [];

		}

	},

	rotate: function(cx, cy, x, y, angle) {

		var radians = (Math.PI / 180) * angle,
			cos = Math.cos(radians),
			sin = Math.sin(radians),
			nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
			ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;

		return [nx, ny];

	},

	getCurvePoints: function(pts, tension, isClosed, numOfSegments) {

		// use input value if provided, or use a default value
		tension = (typeof tension != 'undefined') ? tension : 0.5;
		isClosed = isClosed ? isClosed : false;
		numOfSegments = numOfSegments ? numOfSegments : 16;

		var res = [],    // clone array
			x, y,           // our x,y coords
			t1x, t2x, t1y, t2y, // tension vectors
			c1, c2, c3, c4,     // cardinal points
			st, t, i;       // steps based on num. of segments

		// clone array so we don't change the original
		//
		var _pts = pts.slice(0);

		// The algorithm require a previous and next point to the actual point array.
		// Check if we will draw closed or open curve.
		// If closed, copy end points to beginning and first points to end
		// If open, duplicate first points to befinning, end points to end
		if (isClosed) {
			_pts.unshift(pts[pts.length - 1]);
			_pts.unshift(pts[pts.length - 2]);
			_pts.unshift(pts[pts.length - 1]);
			_pts.unshift(pts[pts.length - 2]);
			_pts.push(pts[0]);
			_pts.push(pts[1]);
		}
		else {
			_pts.unshift(pts[1]);   //copy 1. point and insert at beginning
			_pts.unshift(pts[0]);
			_pts.push(pts[pts.length - 2]); //copy last point and append
			_pts.push(pts[pts.length - 1]);
		}

		// ok, lets start..

		// 1. loop goes through point array
		// 2. loop goes through each segment between the 2 pts + 1e point before and after
		for (i=2; i < (_pts.length - 4); i+=2) {
			for (t=0; t <= numOfSegments; t++) {

				// calc tension vectors
				t1x = (_pts[i+2] - _pts[i-2]) * tension;
				t2x = (_pts[i+4] - _pts[i]) * tension;

				t1y = (_pts[i+3] - _pts[i-1]) * tension;
				t2y = (_pts[i+5] - _pts[i+1]) * tension;

				// calc step
				st = t / numOfSegments;

				// calc cardinals
				c1 =   2 * Math.pow(st, 3)  - 3 * Math.pow(st, 2) + 1;
				c2 = -(2 * Math.pow(st, 3)) + 3 * Math.pow(st, 2);
				c3 =       Math.pow(st, 3)  - 2 * Math.pow(st, 2) + st;
				c4 =       Math.pow(st, 3)  -     Math.pow(st, 2);

				// calc x and y cords with common control vectors
				x = c1 * _pts[i]    + c2 * _pts[i+2] + c3 * t1x + c4 * t2x;
				y = c1 * _pts[i+1]  + c2 * _pts[i+3] + c3 * t1y + c4 * t2y;

				//store points in array
				res.push(x);
				res.push(y);

			}
		}

		return res;

	},

	visualiseBezierPath: function(sprite, splines_params) {

		if (!sprite._tweenBesierVisualiser) sprite._tweenBesierVisualiser = this.buildChild(sprite.parent, {type: 'graphics'});

		var segments = BezierPlugin.bezierThrough(splines_params.values, splines_params.curviness, true);

		MRAID.log(segments);

	}

}); 
