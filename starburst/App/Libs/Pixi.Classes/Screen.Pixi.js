//-----------------------------------------------------------------------------
// Filename : Screen.Pixi.js
//-----------------------------------------------------------------------------
// Language : Javascript
// Date of creation : 05.09.2016
// Require: Class.js
//-----------------------------------------------------------------------------
// Pixi specific screen functions
//-----------------------------------------------------------------------------

Class.Mixin(Screen, {

	SpecialParams: ['name', 'type', 'image', 'scaleStrategy', 'scaleGlobal', 'tint', 'mask', 'draw', 'styles', 'hit', 'filters', 'event', 'button', 'spineData', 'spineAtlas', 'spineTexture', 'video'],

	buildChild: function(container, child_params) {

		let child, i;

		MRAID.processDynamicProperties(child_params);

		if (child_params.type === 'sprite') {

			child = new PIXI.Sprite(this.getTexture(child_params.frame || child_params.image));

			container.addChild(child);

		} else if (child_params.type === 'tiling-sprite') {

			child = new PIXI.extras.TilingSprite(this.getTexture(child_params.frame || child_params.image), child_params.width, child_params.height);

			container.addChild(child);

		} else if (child_params.type === 'text') {

			child = new PIXI.Text(child_params.text, child_params.styles);

			container.addChild(child);

		} else if (child_params.type === 'bitmap-text') {

			child = new PIXI.extras.BitmapText(child_params.text, child_params.styles);

			container.addChild(child);

		}  else if (child_params.type === 'multistyle-text') {

			child = new MultiStyleText(child_params.text, child_params.styles);

			container.addChild(child);

		} else if (child_params.type === 'graphics') {

			child = new PIXI.Graphics();

			//Graphics will be drawn on resize event

			container.addChild(child);

		} else if (child_params.type === 'movie-clip') {

			if (child_params.frameTemplate) {

				child_params.frames = [];

				if ("frameStart" in child_params) {

					for (i = child_params.frameStart; i <= child_params.frameEnd; i++) {

						if (!child_params.frameFilter || child_params.frameFilter(i)) child_params.frames.push(child_params.frameTemplate.replace('???', i < 100 ? (i < 10 ? '00' + i : '0' + i) : i).replace('??', i < 10 ? '0' + i : i).replace('?', i));

					}

				} else if ("frameNumbers" in child_params) {

					for (i = 0; i <= child_params.frameNumbers.length; i++) {

						var c = child_params.frameNumbers[i];

						if (!child_params.frameFilter || child_params.frameFilter(c)) child_params.frames.push(child_params.frameTemplate.replace('???', c < 100 ? (c < 10 ? '00' + c : '0' + c) : c).replace('??', c < 10 ? '0' + c : c).replace('?', c));

					}

				}

			}

			var frames = _.map(child_params.frames, function(image) {

				return this.getTexture(image);

			}, this);

			child = new PIXI.extras.AnimatedSprite(frames);

			child.animationSpeed = child_params.speed || 1;

			child.loop = child_params.loop || false;

			container.addChild(child);

		} else if (child_params.type === 'video') {

			MRAID.processDynamicProperties(child_params);

			if (child_params.src) {

				if (Settings['assets-quality'] !== 'high') child_params.src = child_params.src.replace('.low', '').replace('.medium', '').replace('.mp4', '.' + Settings['assets-quality'] + '.mp4').replace('.webm', '.' + Settings['assets-quality'] + '.webm');

				if (Settings['assets-path'] && child_params.src.indexOf(Settings['assets-path']) !== 0 && child_params.src.indexOf('data:') !== 0 && child_params.src.indexOf('blob:') !== 0) child_params.src = Settings['assets-path'] + child_params.src;

				child = new PIXI.Sprite(PIXI.Texture.fromVideoUrl({src: this.value(child_params.src), mime: this.value(child_params.mime)}, 1));

			} else if (child_params.video) {

				let video = child_params.video;

				if (typeof video === 'string') video = App.Assets[video].video;

				child = PIXI.Sprite.from(video);

			}

			child.video = child.texture.baseTexture.source;

			child.play = function(time, next) {

				MRAID.log(child.name, 'child.play');

				MRAID.isAutoplaySupported((result) => {

					MRAID.log(child.name, 'child.play isAutoplaySupported', result);

					child.texture.baseTexture.source.muted = (result === "muted");

					if (typeof time === 'number') child.texture.baseTexture.source.currenttime = time;

					child.texture.baseTexture.source.play();

					child.isPlaying = true;

					MRAID.log(child.name, 'child.isPlaying', child.isPlaying);

					if (next) next(result);
					else if (typeof time === "function") time(result);

				});

			};

			child.pause = function() {

				MRAID.log(child.name, 'child.pause', child.texture.baseTexture.source.src || child.texture.baseTexture.source.firstChild.src);

				child.texture.baseTexture.source.pause();

				child.isPlaying = false;

				MRAID.log(child.name, 'child.isPlaying', child.isPlaying);

			};

			if (child_params.muted) child.texture.baseTexture.source.muted = true;

			//By default pixi autoplay all video sprites! We need stop this if our own play() method was not called.
			if (!child_params.autoplay) {

				//child.texture.baseTexture.on('loaded', function() {

					child.video.addEventListener('playing', function() {

						if (!child.isPlaying) {

							MRAID.log(child.name, 'child playing pause', child.isPlaying);

							child.pause();

						}

					});

				//});

			}

			if (child_params.autoload) child.video.load();

			container.addChild(child);

		} else if (child_params.type === 'container') {

			child = new PIXI.Container();

			container.addChild(child);

		} else if (child_params.type === 'projection-container-2d') {

			child = new PIXI.projection.Container2d();

			container.addChild(child);

		} else if (child_params.type === 'projection-sprite-2d') {

			child = new PIXI.projection.Sprite2d(this.getTexture(child_params.frame || child_params.image));

			container.addChild(child);

		} else if (child_params.type === 'spine') {

			let spine_atlas;

			if (App.Assets[child_params.spineAtlas].type === 'text') {

				spine_atlas = new PIXI.spine.core.TextureAtlas(App.Assets[child_params.spineAtlas].data, function(line, callback) {

					callback(App.resources[child_params.spineTexture].texture.baseTexture);

				});

			} else if (App.Assets[child_params.spineAtlas].type === 'atlas') {

				spine_atlas = new PIXI.spine.core.TextureAtlas();

				let all_textures = {};

				this.each(App.Assets[child_params.spineAtlas].data.data.frames || App.Assets[child_params.spineAtlas].json.frames, function(frame_data, frame_name) {

					if (child_params.spineAtlasFolder && frame_name.indexOf(child_params.spineAtlasFolder) > -1) {

						all_textures[frame_name.substr(child_params.spineAtlasFolder.length)] = PIXI.Texture.from(frame_name);

					} else if (!child_params.spineAtlasFolder) {

						all_textures[frame_name] = PIXI.Texture.from(frame_name);

					}

				});

				spine_atlas.addTextureHash(all_textures, true);

			}

			var spineAtlasLoader = new PIXI.spine.core.AtlasAttachmentLoader(spine_atlas);
			var spineJsonParser = new PIXI.spine.core.SkeletonJson(spineAtlasLoader);

			spineJsonParser.scale = 2.0;

			var spineData = spineJsonParser.readSkeletonData(App.Assets[child_params.spineData].data);

			child = new PIXI.spine.Spine(spineData);

			container.addChild(child);

		} else {

			if (!child_params.type) child_params.type = 'container';

			child = new PIXI.Container();

			container.addChild(child);

		}

		if (child.anchor) child.anchor.set(0.5, 0.5);

		child.type = child_params.type;

		if (child_params.name) {

			this[child_params.name] = child;

			child.name = child_params.name;

		}

		child.params = child_params;

		var event_params = child_params.event || child_params.button;

		if (event_params) {

			if (event_params === true) event_params = {name: child_params.name};

			else if (_.isString(event_params)) event_params = {name: event_params};

			if (child_params.button) event_params.button = true;

			if (!event_params.name) event_params.name = child_params.name;

			this.enableEvents(child, event_params);

			if (event_params.button) {

				child.defaultCursor = 'pointer';

				child.buttonMode = true;

			}

		}

		if (event_params && event_params.cursor) {

			child.defaultCursor = event_params.cursor;
			child.buttonMode = true;

		}

		Broadcast.call(this.Name + ' build child', [child, child_params]);

		this.applyParams(child, child_params);

		return child;

	},

	rebuildChild: function(sprite) {

		if (_.isString(sprite)) sprite = this[sprite];

		if (sprite) {

			this.buildChild(sprite.parent, sprite.params, true);

			sprite.destroy();

		}

	},

	getTexture: function(value) {

		if (_.isFunction(value)) value = value.call(this);

		if (_.isObject(value)) return value;

		if (App.resources[value]) return App.resources[value].texture;

		else if (PIXI.utils.TextureCache[value]) return PIXI.utils.TextureCache[value];

		else return App.emptyTexture;

	},

	getTextures: function(names) {

		var textures = [];

		for (var i=0; names[i]; i++) textures.push(this.getTexture(names[i]));

		return textures;

	},

	applyParams: function(child, params, is_change_params, is_rebuild) {

		if (_.isString(child)) child = this[child];

		if (!params) params = child.params;

		MRAID.processDynamicProperties(params);

		this.each(params, function(param_value, param_name) {

			//Except custom values
			if (this.contains(this.SpecialParams, param_name)) return;

			//Except orientation values
			if (param_name.indexOf('Landscape') > 0 || param_name.indexOf('Portrait') > 0) return;

			//Apply PIXI.Point values
			if (child[param_name] && child[param_name].set) {

				if (!_.isArray(param_value)) param_value = [param_value, param_value];

				child[param_name].set(this.calculate(param_value[0]), this.calculate(param_value[1]));

				return;

			}

			//Apply other values
			child[param_name] = this.calculate(param_value);

		});

		if (params.image) {

			var texture = this.getTexture(params.image);

			if (child.params.type === 'sprite' && texture !== child.texture && !child.textureCached) {

				child.texture = texture;

			}

		}

		if ('scaleStrategy' in params) child.scale.set(this.getScaleByStrategy(params.scaleStrategy)[0] || 1,this.getScaleByStrategy(params.scaleStrategy)[1]);

		if ('scaleGlobal' in params) {

			if (!_.isArray(params.scaleGlobal)) params.scaleGlobal = [params.scaleGlobal, params.scaleGlobal];

			var parent = child.parent,
				scale_x = child.scale.x,
				scale_y = child.scale.y;

			while (parent && parent !== App.Stage) {

				if (params.scaleGlobal[0]) scale_x /= parent.scale.x;
				if (params.scaleGlobal[1]) scale_y /= parent.scale.y;

				parent = parent.parent;

			}

			child.scale.set(scale_x, scale_y);

		}

		if (params.tint) child.tint = this.stringColorToDecimal(params.tint);

		if (params.mask) {

			if (_.contains(['rect', 'circle', 'arc'], params.mask[0])) {

				if (!child.mask) child.mask = new PIXI.Graphics();

				child.mask.clear();

				child.mask.moveTo(0, 0);

				child.mask.beginFill(0x000000);

				if (params.mask[0] === 'rect') {

					if (params.mask[5] !== true) child.mask.drawRect(this.calculate(params.mask[1]), this.calculate(params.mask[2]), this.calculate(params.mask[3]), this.calculate(params.mask[4]));

				} else if (params.mask[0] === 'circle') {

					child.mask.drawCircle(this.calculate(params.mask[1]), this.calculate(params.mask[2]), this.calculate(params.mask[3]));

				} else if (params.mask[0] === 'arc') {

					child.mask.moveTo(this.calculate(params.mask[1]), this.calculate(params.mask[2]));

					child.mask.arc(this.calculate(params.mask[1]), this.calculate(params.mask[2]), this.calculate(params.mask[3]), this.calculate(params.mask[4]), this.calculate(params.mask[5]));

					if (params.mask[6] === true) child.addChild(child.mask);

				}

			} else if (params.mask[0] === 'sprite') {

				if (!child.mask) {

					if (!params.mask[1].name) params.mask[1].name = child.name + ' mask';

					if (!params.mask[1].type) params.mask[1].type = 'sprite';

					child.mask = this.buildChild(child.parent, params.mask[1]);

					//Recreate texture to prevent blinking effect (possible Pixi bug?)
					child.mask.texture = PIXI.Texture.fromCanvas(child.mask.texture.baseTexture.source);

				} else {

					this.applyParams(child.mask, child.mask.params);

				}

			} else if (this[params.mask]) {

				if (!child.mask) child.mask = this[params.mask];

			}

		}

		if (params.draw) {

			child.clear();

			if (!_.isArray(params.draw[0])) params.draw = [params.draw];

			_.each(params.draw, function(draw_params) {

				if (typeof child[draw_params[0]] === 'function') {

					if (!this.isArray(draw_params[1])) draw_params[1] = [draw_params[1]];

					draw_params[1] = _.map(draw_params[1], function(v) {return this.stringColorToDecimal(v);}, this);

					child[draw_params[0]].apply(child, draw_params[1]);

				}

				else if (draw_params[0] in child) child[draw_params[0]] = this.stringColorToDecimal(draw_params[1]);

			}, this);

		}

		if (params.styles) this.setTextStyles(child, params.styles);

		if (params.hit) this.applyParamHit(child, params.hit);

		if (params.filters) this.applyParamFilter(child, params.filters);

		if (is_change_params !== false && child.params !== params) {

			_.extend(child.params, params);

			if (is_rebuild) this.rebuildChild(child);

		}

	},

	applyParamHit: function(sprite, hit_param) {

		if (hit_param[0] === 'circle') sprite.hitArea = new PIXI.Circle(hit_param[1], hit_param[2], hit_param[3]);
		else if (hit_param[0] === 'polygon') sprite.hitArea = new PIXI.Polygon(hit_param[1]);
		else if (hit_param[0] === 'rect') sprite.hitArea = new PIXI.Rectangle(hit_param[1], hit_param[2], hit_param[3], hit_param[4]);

	},

	applyParamFilter: function(sprite, filters_params) {

		if (!Settings["filters-quality"]) return;

		if (!this.isArray(filters_params[0]) && filters_params && filters_params.length > 0) filters_params = [filters_params];

		if (!sprite.filtersHash) sprite.filtersHash = {};

		var filters = [];

		this.each(filters_params, function(filter_params) {

			if (!PIXI.filters[filter_params[0]]) throw new Error('There are no filter with name "' + filter_params[0] + '"!');

			filter_params = this.modifyFilterSettings(filter_params[0], filter_params);

			var params = (filter_params[1] || []).concat([]);

			params.splice(0, 0, null);

			var filter = new (Function.prototype.bind.apply(PIXI.filters[filter_params[0]], params));

			if (filter_params[2]) this.extend(filter, filter_params[2]);

			filters.push(filter);

			sprite.filtersHash[filter_params[0]] = filter;

			if (filter_params[0] === 'TiltShiftFilter') {

				sprite.filterArea = App.Renderer.screen;

			}

		});

		sprite.filters = filters;

	},

	modifyFilterSettings: function(filter_name, params) {

		params = this.clone(params);

		params = this.value(params);

		for (var i=0, l=params[0].length; i<l; i++) params[0][i] = this.value(params[0][i]);

		if (filter_name === 'DropShadowFilter') {

			if (params[1]) {

				params[1].blur *= App.PixelRatio;
				params[1].distance *= App.PixelRatio;
				params[1].quality *= App.PixelRatio;

			}

		} else if (filter_name === 'MotionBlurFilter') {

			params[1][0][0] *= App.PixelRatio;
			params[1][0][1] *= App.PixelRatio;

		} else if (filter_name === 'TiltShiftFilter') {

			//params[1][0] *= App.PixelRatio;
			params[1][1] *= ([1, 1.3, 1.6])[Math.round(App.PixelRatio-1)] || 1;

		}

		if (params[2] && 'padding' in params[2]) params[2].padding *= App.PixelRatio;

		return params;

	},

	enableEvents: function (sprite, event_params) {

		var name = event_params.name;

		sprite.interactive = true;

		var on_down_call = function() {

			//Firefox mobile view double click fix
			if (sprite._down_event_time && Date.now() - sprite._down_event_time < 30) return;
			sprite._down_event_time = Date.now();

			Broadcast.call(this.Name + ' ' + name + ' down', [sprite, arguments[0], arguments[1]]);

			if (event_params.press) start_press_event.apply(this, [arguments[0], arguments[1], event_params.press]);

		};

		var on_up_call = function() {

			//Firefox mobile view double click fix
			if (sprite._up_event_time && Date.now() - sprite._up_event_time < 30) return;
			sprite._up_event_time = Date.now();

			Broadcast.call(this.Name + ' ' + name + ' up', [sprite, arguments[0], arguments[1]]);
			Broadcast.call(this.Name + ' ' + name + ' click', [sprite, arguments[0], arguments[1]]);

			if (event_params.press) stop_press_event();

		};

		var on_up_out_call = function() {

			//Firefox mobile view double click fix
			if (sprite._up_out_event_time && Date.now() - sprite._up_out_event_time < 30) return;
			sprite._up_out_event_time = Date.now();

			Broadcast.call(this.Name + ' ' + name + ' up outside', [sprite, arguments[0], arguments[1]]);

			if (event_params.press) stop_press_event();

		};

		var on_over_call = function() {

			Broadcast.call(this.Name + ' ' + name + ' over', [sprite, arguments[0], arguments[1]]);

		};

		var on_out_call = function() {

			Broadcast.call(this.Name + ' ' + name + ' out', [sprite, arguments[0], arguments[1]]);

			if (event_params.press) stop_press_event();

		};

		var on_move_call = function() {

			Broadcast.call(this.Name + ' ' + name + ' move', [sprite, arguments[0], arguments[1]]);

		};

		var on_wheel_call = function() {

			Broadcast.call(this.Name + ' ' + name + ' wheel', [sprite, arguments[0], arguments[1]]);

		};

		var on_down_change = function() {

			var down = event_params.down;

			if (down) {

				if (_.isFunction(down)) down = down.apply(this, []);

				if (down) {

					var actions = _.isArray(down) ? down : [down];

					if (!_.isArray(actions[0])) actions = [actions];

					for (var i = 0; actions[i]; i++) {

						var action = actions[i];

						var tween = this.Tweens[action[0]];

						if (!tween) throw new Error('There are no tween with name "' + action[0] + '". Look at "' + this.Name + '".Tweens definition or "' + this.Name + '".Containers.<child>.<event>.<down> definition.');

						if (!action[1]) action[1] = sprite;

						this.tween(action[0], action[1]);

					}

				}

			}

			var down_sprite = event_params.downSprite;

			if (down_sprite) {

				sprite.alpha = 0;
				this[down_sprite].alpha = 1;

			}

		};

		var on_up_change = function() {

			var up = event_params.up;

			if (up) {

				if (_.isFunction(up)) up = up.apply(this, []);

				if (up) {

					var actions = _.isArray(up) ? up : [up];

					if (!_.isArray(actions[0])) actions = [actions];

					for (var i = 0; actions[i]; i++) {

						var action = actions[i];

						var tween = this.Tweens[action[0]];

						if (!tween) throw new Error('There are no tween with name "' + action[0] + '". Look at "' + this.Name + '".Tweens definition or "' + this.Name + '".Containers.<child>.<event>.<up> definition.');

						if (!action[1]) action[1] = sprite;

						this.tween(action[0], action[1]);

					}

				}

			}

			var down_sprite = event_params.downSprite;

			if (down_sprite) {

				sprite.alpha = 1;
				this[down_sprite].alpha = 0;

			}

		};

		var on_over_change = function() {

			var over = event_params.over;

			if (_.isFunction(over)) over = over.apply(this, []);

			if (_.isArray(over) || _.isString(over)) {

				var actions = _.isArray(over) ? over : [over];

				if (!_.isArray(actions[0])) actions = [actions];

				for (var i = 0; actions[i]; i++) {

					var action = actions[i];

					var tween = this.Tweens[action[0]];

					if (!tween) throw new Error('There are no tween with name "' + action[0] + '". Look at "' + this.Name + '".Tweens definition or "' + this.Name + '".Containers.<child>.<event>.<over> definition.');

					if (!action[1]) action[1] = sprite;

					this.tween(action[0], action[1]);

				}

			} else if (_.isObject(over)) {

				sprite.params._over_original_position = sprite.params.position;
				sprite.params._over_original_scale = sprite.params.scale;

				this.tween(over, sprite);

			}

		};

		var on_out_change = function() {

			var out = event_params.out;

			if (_.isFunction(out)) out = out.apply(this, []);

			else if (_.isArray(out) || _.isString(out)) {

				var actions = _.isArray(out) ? out : [out];

				if (!_.isArray(actions[0])) actions = [actions];

				for (var i = 0; actions[i]; i++) {

					var action = actions[i];

					var tween = this.Tweens[action[0]];

					if (!tween) throw new Error('There are no tween with name "' + action[0] + '". Look at "' + this.Name + '".Tweens definition or "' + this.Name + '".Containers.<child>.<event>.<out> definition.');

					if (!action[1]) action[1] = sprite;

					this.tween(action[0], action[1]);

				}

			} else if (_.isObject(out)) {

				this.tween(out, sprite);

			}

			var over = event_params.over;

			if (_.isObject(over) && !_.isArray(over)) {

				var tween_params = [];

				if (sprite.params._over_original_position) tween_params.push(['position', sprite.params._over_original_position, over.time || 200, over.delay || 0, over.ease || Ease.linear]);
				if (sprite.params._over_original_scale) tween_params.push(['scale', sprite.params._over_original_scale, over.time || 200, over.delay || 0, over.ease || Ease.linear]);

				this.tween(tween_params, sprite);

			}

		};

		var start_press_event = function(e, object, interval) {

			Broadcast.call(this.Name + ' ' + name + ' press', [sprite, e, object]);

			sprite.pressInterval = setInterval(function() {

				Broadcast.call(this.Name + ' ' + name + ' press', [sprite, e, object]);

			}.bind(this), interval);

		};

		var stop_press_event = function() {

			clearInterval(sprite.pressInterval);

		};

		if (window.PointerEvent) {

			sprite
				.on('pointerdown', _.bind(on_down_call, this))
				.on('pointerup', _.bind(on_up_call, this))
				.on('pointerover', _.bind(on_over_call, this))
				.on('pointerout', _.bind(on_out_call, this));

			if (event_params.move) {

				sprite
					.on('pointermove', _.bind(on_move_call, this))

			}

			if (event_params.down || event_params.up || event_params.over || event_params.out) {

				sprite
					.on('pointerdown', _.bind(on_down_change, this))
					.on('pointerup', _.bind(on_up_change, this))
					.on('pointerover', _.bind(on_over_change, this))
					.on('pointerout', _.bind(on_out_change, this));

			}

		} else if (App.IsTouchDevice) {

			sprite
				.on('touchstart', _.bind(on_down_call, this))
				.on('touchend', _.bind(on_up_call, this))
				.on('touchendoutside', _.bind(on_up_out_call, this))
				.on('touchenter', _.bind(on_over_call, this))
				.on('touchleave', _.bind(on_out_call, this));

			if (event_params.move) {

				sprite
					.on('touchmove', _.bind(on_move_call, this))

			}

			if (event_params.down || event_params.up || event_params.over || event_params.out) {

				sprite
					.on('touchstart', _.bind(on_down_change, this))
					.on('touchend', _.bind(on_up_change, this))
					.on('touchendoutside', _.bind(on_up_change, this));

			}

		} else {

			sprite
				.on('mousedown', _.bind(on_down_call, this))
				.on('mouseup', _.bind(on_up_call, this))
				.on('mouseupoutside', _.bind(on_up_out_call, this))
				.on('mouseover', _.bind(on_over_call, this))
				.on('mouseout', _.bind(on_out_call, this))
				.on('wheel', _.bind(on_wheel_call, this));

			if (event_params.move) {

				sprite
					.on('mousemove', _.bind(on_move_call, this))

			}

			if (event_params.down || event_params.up || event_params.over || event_params.out) {

				sprite
					.on('mousedown', _.bind(on_down_change, this))
					.on('mouseup', _.bind(on_up_change, this))
					.on('mouseupoutside', _.bind(on_up_change, this))
					.on('mouseover', _.bind(on_over_change, this))
					.on('mouseout', _.bind(on_out_change, this));

			}

		}

		Broadcast.on("Document Press Up", function(e) {

			stop_press_event();

		}, sprite);

	},

	bringToTop() {

		for (let i = 0; this._containers[i]; i++) App.Stage.addChild(this._containers[i]);

	},

	/**
	 en: Cache sprite textures. Highly increase productivity if sprites have filters.
	 ru: Кэширует текстуру спрайтов, значительно увеличивая производительность если у спрайтов есть фильтры.

	 this.cacheTextures(["my sprite 1", "my sprite 2"], 100);

	 @public
	 @method cacheTextures
	 @param sprites {Array}
	 en: Array of sprite names or sprite objects to caching
	 ru: Массив имён или объектов спрайтов для кэширования
	 @param padding {Number}
	 en: Padding for created textures
	 ru: Отступ со всех сторон для создаваемых текстур
	 */
	cacheTextures(sprites, padding = 50) {

		this.each(sprites, (sprite) => {

			if (typeof sprite === 'string') sprite = this[sprite];

			if (sprite) this.cacheTexture(sprite, padding);

		});

	},

	/**
	 en: Cache sprite texture. Highly increase productivity if sprite have filters.
	 ru: Кэширует текстуру спрайта, значительно увеличивая производительность если у спрайта есть фильтры.

	 this.cacheTexture(this["my sprite"], 100);

	 @public
	 @method cacheTexture
	 @param sprite {Object}
	 en: Sprite object for caching
	 ru: Объект спрацта для кэширования
	 @param padding {Number}
	 en: Padding for created texture
	 ru: Отступ со всех сторон для создаваемой текстуры
	 */
	cacheTexture(sprite, padding = 50) {

		const width = sprite.texture.width;
		const height = sprite.texture.height;

		const position = sprite.position.clone();
		const scale = sprite.scale.clone();
		const anchor = sprite.anchor.clone();

		sprite.position.set(0, 0);
		sprite.scale.set(1);
		sprite.anchor.set(0.5, 0.5);

		sprite.texture = App.Renderer.generateTexture(sprite, PIXI.SCALE_MODES.LINEAR, App.PixelRatio, new PIXI.Rectangle(- width / 2 - padding, - height / 2 - padding, width + padding * 2, height + padding * 2));

		if (sprite.params.filters) sprite.params.filters = [];
		if (sprite.filters) sprite.filters = [];

		sprite.position.copy(position);
		sprite.scale.copy(scale);
		sprite.anchor.copy(anchor);

		sprite.textureCached = true;

	},

	/**
	 en: Cache all sprite textures which have filters. Highly increase productivity.
	 ru: Кэширует все спрайты у которых есть фильтры, значительно увеличивая производительность.

	 this.cacheFilters();

	 @public
	 @method cacheFilters
	 */
	cacheFilters() {

		this.each(this._childs, function(child) {

			if (child.filters && child.filters.length > 0) this.cacheTexture(child);

		});

	},

	/**
	 en: Returns position of pointer (mouse or finger) on stage relative to specified container or global position (if container not specified)
	 ru: Возвращает позицию курсора (мыши или пальца) на сцене относительно указанного контейнера (если контейнер не задан, возвращаются глобальные координаты)

	 this.getPointerPosition();

	 @public
	 @method getPointerPosition
	 */
	getPointerPosition(container = null) {

		if (typeof container === 'string') container = this[container];

		if (!container || !container.toLocal) return App.Renderer.plugins.interaction.eventData.data.global;

		return container.toLocal(App.Renderer.plugins.interaction.eventData.data.global);

	},

	/**
	 en: Plays specified sound
	 ru: Воспроизводит указанный звуковой файл

	 this.play("sound-name", {delay: 0}, {loop: false, volume: 1});

	 @public
	 @method playSound
	 @param name {String}
	 en: Name of the preloaded sound asset
	 ru: Имя загруженного звукового ресурса
	 @param options {Object}
	 en: Options
	 ru: Настройки
	 @param pixi_settings {Object}
	 en: Additional settings object for PIXI.sound.play function
	 ru: Дополнительные настройки для PIXI.sound.play функции
	 @param next {Function}
	 en: Callback function in which you will receive PIXI.sound instance
	 ru: Функция обратного вызова в которую передастся экземпляр PIXI.sound
	 */
	playSound: function(name, options = {}, pixi_settings = {}, next = null) {

		if (App.Assets[name]) {

			this.timeout(() => {

				try {

					const sound_instance = PIXI.sound.play(name, pixi_settings);

					if (next) next.call(this, sound_instance);

				} catch (e) {

					if (next) next.call(this);

				}

			}, options.delay || 0);

		}

	},

}); 
