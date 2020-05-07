//-----------------------------------------------------------------------------
// Filename : Game.js
//-----------------------------------------------------------------------------
// Language : Javascript
// Date of creation : 05.09.2016
// Require: Class.js
//-----------------------------------------------------------------------------
// Abstract Pixi game constructor with main functionality
//-----------------------------------------------------------------------------
/**
 en: This class creates Pixi application and canvas element
 ru: Этот класс создаёт приложение Pixi и канвас

 en: Example of usage:
 ru: Пример использования:

	 var App = new Game({

		prepare: function() {

			en://This function will be called before Pixi application and canvas element will be created.
			ru://Эта функция будет вызвана перед тем как приложение Pixi и канвас будут созданы.

		},

		ready: function () {

			en://This function will be called after Pixi application will be created and after all game assets will be loaded.
			ru://Эта функция будет вызвана после того как приложение Pixi и канвас будут созданы и все изображения, текстуры, шрифты и прочее будут загружены.

		}

	});

 @class Game
 @constructor
 @param {Object} properties &nbsp;
 en: Object with a set of methods and properties for the resulting instance of Game class
 ru: Объект с методами и свойствами создаваемого экземпляра Game
 */
const Game = new Class({

	PixelRatio: window.devicePixelRatio || 1,

	IsTouchDevice: (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)),

	IsCreateGame: true,

	ResolutionWidth: 1920, //Resolution of game assets (psd file resolution)
	ResolutionHeight: 1080, //Resolution of game assets (psd file resolution)

	MaximumCanvasSize: 2048 * 2048,

	ClearBeforeRender: true,
	Antialias: false,
	RoundPixels: false,

	StageBackgroundColor: 0x000000,

	Scale: 1, //Game scale based on (ResolutionWidth/ResolutionHeight of assets and real game Width/Height)

	Width: 1920, //Real size of game canvas in pixels (calculated dynamically when window resize)
	Height: 1080, //Real size of game canvas in pixels (calculated dynamically when window resize)

	CenterX: 960, //Center of the screen (Width / 2)
	CenterY: 540, //Center of the screen (Height / 2)

	IsLandscape: true, //Current orientation (calculated from current Width and Height of game)
	IsPortrait: false, //Current orientation (calculated from current Width and Height of game)

	srcURL: '',

	Assets: {},

	Screens: [], //Array of game screen objects

	start() {

		throw new Error('App.start must be redefined. Include Game.Phaser.js or Game.Pixi.js');

	},

	loadAssets(assets, next, options) {

		if (!options) options = {};

		const _this = this;

		const loader = {
			sources: {},
			states: {},
			check: function check_complete(assets, name) {

				if (assets && name) {

					loader.states[name] = 'ready';

					_this.each(assets, function (asset) {

						if (!App.Assets[asset.name] || App.Assets[asset.name].state !== 'loaded') loader.states['video'] = 'loading';

					});

				}

				let result = true;

				_this.each(loader.states, function(m) {if (m !== 'ready') result = false;});

				if (result) {

					_this.each(loader.sources.atlas, function(asset) {

						if (asset.json) {

							// Create a new spritesheet with loaded image and data
							const spritesheet = new PIXI.Spritesheet(asset.data.texture.baseTexture, asset.json);

							spritesheet.parse(function () {});

						}

					});

					loader.loadCompleted = true;

					if (next) {

						next.call(this);

						next = null;

					}

				}

				Broadcast.call('Assets Preload Progress', [loader]);

			}

		};

		this.extractAssetsForLoad(loader, assets, next, options);

		this.loadImages(loader, loader.sources['image']);

		this.loadAtlases(loader, loader.sources['atlas']);

		this.loadBitmapFonts(loader, loader.sources['bitmap-font']);

		this.loadWebFonts(loader, loader.sources['web-font']);

		this.loadSounds(loader, loader.sources['sound']);

		this.loadDOMImages(loader, loader.sources['dom-image']);

		this.loadTexts(loader, loader.sources['text']);

		this.loadVideos(loader, loader.sources['video']);

		this.loadSources(loader);

		return loader;

	},

	extractAssetsForLoad(loader, assets, next, options) {

		this.each(Settings.Assets, function(asset, name) {

			asset.name = name;

			if (assets && !this.contains(assets, name)) return;

			if (asset.type === "sound") {

				if (!asset.loadStrategy) {

					if (Settings["sounds"] === true) asset.loadStrategy = 'preload';

					if (Settings["sounds"] === "delayed") asset.loadStrategy = 'delayed';

					if (Settings["sounds"] === false) return;

				}

			}

			if (!asset.loadStrategy) {

				if (options.strategy !== 'preload') return;

			} else {

				if (options.strategy !== asset.loadStrategy) return;

			}

			if (App.Assets[name] && App.Assets[name].state !== 'prepared') {

				if (App.Assets[name].state === 'loaded') console.warn('Asset already loaded. Check "' + name + '" asset for multiple load.');

				else if (App.Assets[name].state === 'loading') console.warn('Asset already loading. Check "' + name + '" asset for multiple load.');

				else throw new Error('Asset names in all screens must be unique. Check "' + name + '" asset definition in "' + screen.Name + '" screen.');

			} else if (!App.Assets[name]) {

				App.Assets[name] = asset;

				asset.state = 'prepared';

			}

			if (asset.type === 'json') {

				asset.type = 'text';

				asset.parseJson = true;

			}

			//Allow disable assets on removing url
			if (asset.url) {

				if (typeof asset.url === 'function') asset.url = asset.url.call(App);

				if (asset.url.indexOf('http') !== 0 && asset.url.indexOf('data:') !== 0) asset.url = App.srcURL + asset.url;

				if (!loader.states[asset.type]) {

					loader.states[asset.type] = 'initialized';

					loader.sources[asset.type] = [];

				}

				loader.sources[asset.type].push(asset);

				//asset.state = 'loading';

			}

		});

	},

	loadImages() {

		throw new Error('App.loadImages must be redefined. Include Game.Phaser.js or Game.Pixi.js');

	},

	loadAtlases() {

		throw new Error('App.loadAtlases must be redefined. Include Game.Phaser.js or Game.Pixi.js');

	},

	loadBitmapFonts() {

		throw new Error('App.loadBitmapFonts must be redefined. Include Game.Phaser.js or Game.Pixi.js');

	},

	loadWebFonts(loader, assets) {

		if (assets && assets.length > 0) {

			var _this = this;

			window.WebFontConfig = {
				custom: {
					families: assets.map(function (asset) {
						return asset.name;
					}),
					urls: assets.map(function (asset) {
						return asset.url;
					})
				},
				active: function() {

					_this.each(assets, function(asset) {

						App.Assets[asset.name].state = 'loaded';

					});

					loader.states['web-font'] = 'ready';

					loader.check();

				},
				inactive: function () {

					_this.each(assets, function (asset) {

						App.Assets[asset.name].state = 'loaded';

					});

					loader.states['web-font'] = 'ready';

					loader.check();

				},
				fontactive: function(name) {

					if (Settings["publisher"] !== 'playable-kit') {

						var el = document.createElement('div');

						el.id = name;

						el.style.fontFamily = name;
						el.style.position = 'fixed';
						el.style.top = 0;
						el.style.visibility = 'hidden';

						el.innerHTML = 'AbCdE 12345';

						document.body.appendChild(el);

					}

				},
				fontinactive: function(familyName, fvd) {

					console.warn("failed " +familyName + " " + fvd);

				},
				timeout: 5000
			};

			if (window.WebFont) window.WebFont.load(window.WebFontConfig);

			else {

				(function(d) {
					var wf = d.createElement('script'), s = d.scripts[0];
					wf['crs'.split('').reverse().join('')] = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
					wf.async = true;
					s.parentNode.insertBefore(wf, s);
				})(document);

			}

		} else {

			loader.states['font'] = 'ready';

			loader.check();

		}

	},

	loadSounds() {

		throw new Error('App.loadSounds must be redefined. Include Game.Phaser.js or Game.Pixi.js');

	},

	loadDOMImages(loader, assets) {

		if (assets && assets.length > 0) {

			this.each(assets, function(asset) {

				var img = new Image();
				img.src = asset.url;

				//TODO: Add dom images load event (test if image already loaded in css, load event will not work)
				asset.state = 'loaded';

			});

			//TODO: Wait dom images before load complete callback (test if image already loaded in css, load event will not work)

			loader.states['dom-image'] = 'ready';

			loader.check();

		} else {

			loader.states['dom-image'] = 'ready';

			loader.check();

		}

	},

	loadTexts(loader, assets) {

		if (assets && assets.length > 0) {

			var _this = this;

			this.each(assets, function(asset) {

				if (asset.pako) asset.json = JSON.parse(pako.inflate(asset.pako, { to: 'string' }));

				if (asset.text) {

					App.Assets[asset.name].data = asset.text;
					App.Assets[asset.name].state = 'loaded';

				} else if (asset.json) {

					App.Assets[asset.name].data = asset.json;
					App.Assets[asset.name].state = 'loaded';

				} else {

					var xhr = new XMLHttpRequest();

					var url = asset.url;

					if (url.indexOf('data:') !== 0) url += "?v=" + Settings["version"];

					xhr.open('GET', url, true);

					xhr.send();

					xhr.onprogress = function(event) {

						asset.progress = event.loaded / event.total;

						Broadcast.call('Assets Preload Progress', [loader]);

					};

					xhr.onload = function () {

						App.Assets[asset.name].data = xhr.responseText;
						App.Assets[asset.name].state = 'loaded';

						if (App.Assets[asset.name].parseJson) {

							App.Assets[asset.name].text = xhr.responseText;

							App.Assets[asset.name].data = JSON.parse(xhr.responseText);

						}

						loader.states['text'] = 'ready';

						_this.each(assets, function (asset) {

							if (!App.Assets[asset.name] || App.Assets[asset.name].state !== 'loaded') loader.states['text'] = 'loading';

						});

						loader.check();

					};

				}

			});

			loader.states['text'] = 'ready';

			this.each(assets, function(asset) {

				if (!App.Assets[asset.name] || App.Assets[asset.name].state !== 'loaded') loader.states['text'] = 'loading';

			});

			loader.check();

		} else {

			loader.states['text'] = 'ready';

			loader.check();

		}

	},

	loadVideos(loader, assets) {

		if (assets && assets.length > 0) {

			this.each(assets, function(asset) {

				if (asset.pako) asset.url = pako.inflate(asset.pako, {to: 'string'});

				let url = asset.url;

				if (url.indexOf('data:') !== 0) {

					const quality = this.getAssetQuality(asset);

					if (quality !== false) {

						if (quality === 'medium') {

							url = url.replace('.mp4', '.medium.mp4').replace('.webm', '.medium.webm');

						} else if (quality === 'low') {

							url = url.replace('.mp4', '.low.mp4').replace('.webm', '.low.webm');

						}

					}

					url += "?v=" + Settings["version"];

				}

				if (asset["loadTillCanPlay"]) {

					asset.video = document.createElement("video");
					asset.video.setAttribute('muted', 'muted');
					asset.video.setAttribute('playsinline', '');
					asset.video.setAttribute('preload', 'auto');

					asset.video.addEventListener(MRAID.ios ? 'loadedmetadata' : 'canplay', function() {

						asset.video.removeEventListener(MRAID.ios ? 'loadedmetadata' : 'canplay', arguments.callee);

						MRAID.log('xhr canplay', asset.name);

						//Waiting real video play to avoid ios black screen in the start of video play
						asset.video.addEventListener('timeupdate', function() {

							MRAID.log('xhr timeupdate', asset.name, asset.video.currentTime);

							if (asset.video.currentTime > 0.1) {

								asset.video.removeEventListener('timeupdate', arguments.callee);

								MRAID.log('xhr timeupdate end', asset.name);

								asset.video.pause();

								asset.video.currentTime = 0;

								asset.state = 'loaded';

								load_video();

								loader.check(assets, 'video');

							}

						});

						asset.video.muted = true;

						asset.video.play();

					});

					//Will load later one by another
					//asset.video.src = asset.url;
					//asset.video.load();

				} else {

					asset.video = document.createElement("video");
					asset.video.setAttribute('muted', 'muted');
					asset.video.setAttribute('playsinline', '');
					asset.video.setAttribute('preload', 'auto');
					const xhr = asset.xhr = new XMLHttpRequest();

					if (asset.video.canPlayType("video/mp4")) {

						xhr.open('GET', url.replace('.webm', '.mp4'), true);

					} else {

						xhr.open('GET', url.replace('.mp4', '.webm'), true);

					}

					xhr.onprogress = function(event) {

						asset.progress = event.loaded / event.total;

						Broadcast.call('Assets Preload Progress', [loader]);

					};

					xhr.onload = function() {

						MRAID.log('xhr onload', asset.name);

						asset.video.addEventListener(MRAID.ios ? 'loadedmetadata' : 'canplay', function() {

							asset.video.removeEventListener(MRAID.ios ? 'loadedmetadata' : 'canplay', arguments.callee);

							MRAID.log('xhr canplay', asset.name);

							//Waiting real video play to avoid ios black screen in the start of video play
							asset.video.addEventListener('timeupdate', function() {

								MRAID.log('xhr timeupdate', asset.name, asset.video.currentTime);

								if (asset.video.currentTime > 0.1) {

									asset.video.removeEventListener('timeupdate', arguments.callee);

									MRAID.log('xhr timeupdate end', asset.name);

									asset.video.pause();

									asset.video.currentTime = 0;

									asset.state = 'loaded';

									load_video();

									loader.check(assets, 'video');

								}

							});

							asset.video.muted = true;

							asset.video.play();

						});

						asset.objectUrl = URL.createObjectURL(xhr.response);

						asset.video.src = asset.objectUrl;

						asset.video.load();

					};

					xhr.responseType = "blob";

					//Will load later one by another
					//xhr.send();

				}

				/*asset.video.style.width = '100px';
				asset.video.style.zIndex = '100';
				asset.video.style.pointerEvents = 'none';
				asset.video.style.position = 'absolute';
				asset.video.style.left = (asset.position[0] < 0) ? '0px' : 'auto';
				asset.video.style.top = (asset.position[1] < 0) ? '0px' : 'auto';
				asset.video.style.right = (asset.position[0] > 0) ? '0px' : 'auto';
				asset.video.style.bottom = (asset.position[1] > 0) ? '0px' : 'auto';

				document.body.appendChild(asset.video);*/

			});

			const load_video = () => {

				for (let i=0; assets[i]; i++) {

					if (assets[i].state !== 'loading' && assets[i].state !== 'loaded') {

						if (assets[i]["loadTillCanPlay"]) {

							assets[i].video.src = assets[i].url;
							assets[i].video.load();

						} else if (assets[i].xhr) {

							assets[i].xhr.send();

						}

						break;

					}

				}

			};

			load_video();

		}

		loader.check(assets, 'video');

	},

	loadSources() {

		//Just for redeclare in Game.Pixi.js and Game.Phaser.js for loading framework specific type of assets

	},

	create() {

		throw new Error('App.create must be redefined. Include Game.Phaser.js or Game.Pixi.js');

	},

	registerScreen(screen) {

		screen.App = this;

		this.Screens.push(screen);

	},

	getAssetQuality(asset) {

		let quality = Settings["assets-quality"];

		let publisher = Settings["publisher"];

		let asset_release_settings = null;

		if (asset.release && asset.release[publisher]) asset_release_settings = asset.release[publisher];

		if (!asset_release_settings) if (asset.release && asset.release['*']) asset_release_settings = asset.release['*'];

		if (!asset_release_settings) asset_release_settings = {};

		else if (asset_release_settings[quality]) asset_release_settings = asset_release_settings[quality];

		return asset_release_settings["quality"] || asset["quality"] || quality;

	},

	each(obj, fn, context) {

		if (!obj) return;

		var i;

		if (Array.isArray(obj)) {

			for (i = 0; i < obj.length; i++) {

				fn.call(context || this, obj[i], i);

			}

		} else {

			for (i in obj) if (Object.prototype.hasOwnProperty.call(obj, i)) {

				fn.call(context || this, obj[i], i);

			}

		}

	},

	contains(array, obj) {

		if (!array) return false;

		var i = array.length;

		while (i--) {

			if (array[i] === obj) {

				return true;

			}

		}

		return false;

	}

});