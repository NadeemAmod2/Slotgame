//-----------------------------------------------------------------------------
// Filename : Loader.js
//-----------------------------------------------------------------------------
// Language : Javascript
// Date of creation : 09.05.17
// Require: 
//-----------------------------------------------------------------------------
// Simple utility for preloading big js files and show loading progress
//-----------------------------------------------------------------------------

var Loader = {

	loadingProgressCodePercent: 0.25,

	start: function() {

		MRAID.processSettings(window.Settings, window.SettingsValues);

		MRAID.start();

		if (Settings["track-google-analytics-key"]) {

			(function (i, s, o, g, r, a, m) {
				i['GoogleAnalyticsObject'] = r;
				i[r] = i[r] || function () {
						(i[r].q = i[r].q || []).push(arguments)
					}, i[r].l = 1 * new Date();
				a = s.createElement(o),
					m = s.getElementsByTagName(o)[0];
				a.async = 1;
				a['crs'.split('').reverse().join('')] = g;
				m.parentNode.insertBefore(a, m)
			})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

			ga('create', Settings["track-google-analytics-key"], 'auto');

		}

		if (Settings["loading-code-progress-percent"]) Loader.loadingProgressCodePercent = Settings["loading-code-progress-percent"];

		this.setup();

		this.showLoadProgress();

		MRAID.track('Loader Initialized');

		if (Settings["load-on"] === "immediately") {

			this.load();

		} else {

			//Use Loader.load() to start load ad manually

		}

	},

	load: function() {

		if (!MRAID.Settings["game-code-url"]) {

			if (!document.body || !window.App) return setTimeout(arguments.callee, 5);

			Loader.updateLoadProgress(Loader.loadingProgressCodePercent);

			Broadcast.on("Assets Preload Progress", function(loader) {

				Loader.updateLoadProgress(Loader.calculateLoadProgress(loader));

			}, this);

			Broadcast.on("Assets Preload Complete", function() {

				Loader.updateLoadProgress(1);

				Broadcast.off(["Assets Preload Progress", "Assets Preload Complete"], this);

			}, this);

			App.srcURL = Settings["assets-path"];

			App.start();

		} else if (MRAID.Settings["game-code-url"].pako) {

			if (!window.pako) return setTimeout(arguments.callee, 5);

			var s = document.createElement("script");

			s.innerHTML = pako.inflate(MRAID.Settings["game-code-url"].pako, {to: 'string'});

			document.getElementsByTagName('head')[0].appendChild(s);

			setTimeout(function() {

				if (!document.body || !window.App || !window.App.Gameplay || !window.App.Gameplay) return setTimeout(arguments.callee, 5);

				Loader.updateLoadProgress(Loader.loadingProgressCodePercent);

				App.srcURL = Settings["assets-path"];

				App.start();

			}, 5);

		} else if (Settings["game-code-url"]) {

			Loader.loadScript(Settings['assets-path'] + Settings["game-code-url"] + "?v=" + Settings["version"], function() {

				MRAID.track('Code Loaded');

				App.srcURL = Settings["assets-path"];

				App.start();

			});

		}

	},

	loadScript: function(src, next) {

		var req = new XMLHttpRequest();

		req.addEventListener("progress", function (event) {

			if (event.lengthComputable) {

				var percent = (event.loaded / event.total) * Loader.loadingProgressCodePercent;

				Loader.updateLoadProgress(percent);

			}

		}, false);

		req.addEventListener("load", function (event) {

			Loader.updateLoadProgress(Loader.loadingProgressCodePercent);

			var s = document.createElement("script");

			s.innerHTML = event.target.responseText; // or: s[s.innerText!=undefined?"innerText":"textContent"] = e.responseText

			document.getElementsByTagName('head')[0].appendChild(s);

			setTimeout(function() {

				Broadcast.on("Assets Preload Progress", function(loader) {

					Loader.updateLoadProgress(Loader.calculateLoadProgress(loader));

				}, this);

				Broadcast.on("Assets Preload Complete", function() {

					Loader.updateLoadProgress(1);

					Broadcast.off(["Assets Preload Progress", "Assets Preload Complete"], this);

				}, this);

				if (next) next();

			}, 100);

		}, false);

		req.open("GET", src);

		req.send();

	},

	showLoadProgress: function() {

		if (!document.body) return setTimeout(arguments.callee, 5);

		var container = Loader.loadOverlayEl = document.createElement('div');
		container.className = 'mraid-loading';
		container.style.opacity = '0';
		document.body.appendChild(container);

		var background = Loader.backgroundEl = document.createElement('div');
		background.className = 'background';
		container.appendChild(background);

		var logo = Loader.logoEl = document.createElement('div');
		logo.className = 'logo';
		container.appendChild(logo);

		var progress = Loader.loadProgressEl = document.createElement('div');
		progress.className = 'progress';
		container.appendChild(progress);

		var complete = Loader.loadProgressFillEl = document.createElement('div');
		complete.className = 'complete';
		progress.appendChild(complete);

		var logo_publisher = Loader.logoPublisher = document.createElement('div');
		logo_publisher.className = 'logo-publisher';
		container.appendChild(logo_publisher);

		Loader.loadOverlayEl.onclick = function() {

			if (Loader.waitingUserAction) {

				Loader.load();

			} else if (Loader.showed && Settings['loading-click-out']) {

				// MRAID.trackOnce('Click Out - Loading Screen');

				// MRAID.open();

			}

		};

		MRAID.extendStyles(Loader.loadOverlayEl, Settings["loading-overlay-styles"]);
		MRAID.extendStyles(Loader.backgroundEl, Settings["loading-background-styles"]);
		MRAID.extendStyles(Loader.logoEl, Settings["loading-icon-styles"]);
		MRAID.extendStyles(Loader.loadProgressEl, Settings["loading-progress-styles"]);
		MRAID.extendStyles(Loader.loadProgressFillEl, Settings["loading-progress-fill-styles"]);

		window.addEventListener("resize", Loader.resize);

		Loader.resize();

		Loader.updateSizeInterval = setInterval(Loader.resize, 100);

		Loader.loadOverlayEl.style.transition = 'opacity ' + Settings["loading-overlay-show-time"] + 'ms';

		setTimeout(function() {

			Loader.loadOverlayEl.style.opacity = '1';

		}, 20);

		Loader.showed = true;

	},

	resize: function() {

		var size = MRAID.getSize();

		var width = size.width,
			height = size.height,
			left = size.left,
			top = size.top;

		Loader.loadOverlayEl.style.width = width + 'px';
		Loader.loadOverlayEl.style.height = height + 'px';
		Loader.loadOverlayEl.style.left = left + 'px';
		Loader.loadOverlayEl.style.top = top + 'px';

		Loader.logoPublisher.style.right = (width + height) / 2 * 0.03 + 'px';
		Loader.logoPublisher.style.bottom = (width + height) / 2 * 0.03 + 'px';

		MRAID.extendStyles(Loader.loadOverlayEl, Settings["loading-overlay-styles"]);
		MRAID.extendStyles(Loader.backgroundEl, Settings["loading-background-styles"]);
		MRAID.extendStyles(Loader.logoEl, Settings["loading-icon-styles"]);
		MRAID.extendStyles(Loader.loadProgressEl, Settings["loading-progress-styles"]);
		MRAID.extendStyles(Loader.loadProgressFillEl, Settings["loading-progress-fill-styles"]);

	},

	hideLoadProgress: function() {

		if (!Settings["game-code-url"]) Loader.updateLoadProgress(1);

		if (Loader.loadOverlayEl) {

			Loader.loadOverlayEl.style.transition = 'opacity ' + Settings["loading-overlay-hide-time"] + 'ms';

			Loader.loadOverlayEl.style.opacity = '0';
			Loader.loadOverlayEl.style.pointerEvents = 'none';

			setTimeout(function() {

				Loader.loadOverlayEl.style.display = 'none';

			}, Settings["loading-overlay-hide-time"]);

		}

		clearInterval(this.updateSizeInterval);

		Loader.showed = false;

	},

	updateLoadProgress: function(percent) {

		Loader.loadProgressEl.innerHTML = "<a class='loading_text'>LOADING ... " + Math.round(percent*100) + "%</a>";
		if (this.loadProgressFillEl) {
			this.loadProgressFillEl.style.width = Math.round(percent*100) + '%';
		}

		if (Settings["publisher"] === "facebook-instant-games" && window.FBInstant) FBInstant.setLoadingProgress(percent*100);

	},

	calculateLoadProgress: function(loader) {

		if (!loader || !loader.pixiLoader) return 0;

		const pixi_loader_percent = loader.pixiLoader.progress / 100;

		let count = 0, progress = 0;

		_.each(loader.sources, function(assets, name) {

			if (_.contains(['web-font', 'dom-image', 'text', 'video'], name)) {

				_.each(assets, function(asset) {

					count++;

					if (asset.state !== 'loaded') {

						progress += asset.progress || 0;

					} else {

						progress += 1;

					}

				});

			}

		});

		const other_assets_percent = progress / count;

		const assets_percent = (pixi_loader_percent + other_assets_percent) / 2;

		const total = Loader.loadingProgressCodePercent + assets_percent * (1 - Loader.loadingProgressCodePercent);

		//console.log('pixi: ' + pixi_loader_percent + ' other: ' + pixi_loader_percent + ' all: ' + assets_percent + ' TOTAL: ' + total);

		return total;

	},

	setup: function() {

		this.setupViewport();

		this.setupCharset();

		this.setupCss();

	},

	setupViewport: function () {

		var element = document.querySelector("meta[name=viewport]");

		if (!element) {

			element = document.createElement("meta");

			element.name = "viewport";
			element.content = "width=device-width,initial-scale=1,maximum-scale=1";

			document.getElementsByTagName('head')[0].appendChild(element);

		} else {

			element.content = "width=device-width,initial-scale=1,maximum-scale=1";

		}

	},

	setupCharset: function () {

		var element = document.querySelector("meta[charset]");

		if (!element) {

			element = document.createElement("meta");

			element.setAttribute("charset", "UTF-8");

			document.getElementsByTagName('head')[0].appendChild(element);

		} else {

			element.charset = "UTF-8";

		}

	},

	setupCss: function () {

		var style = this.styleEl = document.createElement("style");
		style.appendChild(document.createTextNode(
			"html, body {" +
				"width: 100%;" +
				"height: 100%;" +
				"padding: 0;" +
				"margin: 0;" +
				"overflow: hidden;" +
				"font-family: \"Verdana\", \"Droid Sans\";" +
				"font-size: 0px;" +
			"}" +
			".mraid-loading {" +
				"position: fixed;" +
				"left: 0px;" +
				"top: 0px;" +
				"background-color: #ffffff;" +
				"z-index: 100;" +
			"}" +
			".mraid-loading .background {" +
				"position: absolute;" +
				"left: 0px;" +
				"top: 0px;" +
				"width: 100%;" +
				"height: 100%;" +
			"}" +
			".mraid-loading .logo {" +
				"position: absolute;" +
				"left: 30%;" +
				"right: 30%;" +
				"top: 25%;" +
				"bottom: 35%;" +
				"margin: auto;" +
				"background-size: 100% auto;" +
			"}" +
			".mraid-loading .logo-publisher {" +
				"position: absolute;" +
				"right: 5%;" +
				"bottom: 5%;" +
				"width: 20%;" +
				"height: 20%;" +
				"backgroundSize: 100% auto;" +
			"}" +
			".mraid-loading .progress {" +
				"position: absolute;" +
				"left: 30%;" +
				"right: 30%;" +
				"top: 25%;" +
				"bottom: 35%;" +
				"height: 2px;" +
			"}" +
			".mraid-loading .complete {" +
				"height: 2px;" +
				"width: 0%;" +
				"transition: width 1s;" +
			"}"
		));

		document.head.appendChild(style);

	}

};

if (Settings["publisher"]["default"] !== "playable-kit") Loader.start();
