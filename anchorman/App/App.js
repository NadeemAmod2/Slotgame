var App = new Game({

	ClearBeforeRender: true,
	Antialias: false,
	RoundPixels: false,
	MoveWhenInside: false,
	PrecisionFragment: "mediump",
	Symbols: [
		{
			Image: 'wheelbonus_symbol'
		},
		{
			Image: 'baxter_symbol'
		},
		{
			Image: 'brian_symbol'
		},
		{
			Image: 'champ_symbol'
		},
		{
			Image: 'brick_symbol'
		},
		{
			Image: 'glasses_symbol'
		},
		{
			Image: 'ron_symbol'
		},
		{
			Image: 'hat_symbol'
		},
		{
			Image: 'van_symbol'
		},
		{
			Image: 'scotch_symbol'
		},
		{
			Image: 'wild_symbol'
		}
	],

	SymbolsHighlight: {
		'wheelbonus_symbol': {
			frameStart: 1,
			frameEnd: 35
		},
		'baxter_symbol': {
			frameStart: 1,
			frameEnd: 35
		},
		'brian_symbol': {
			frameStart: 1,
			frameEnd: 36
		},
		'champ_symbol': {
			frameStart: 1,
			frameEnd: 36
		},
		'brick_symbol': {
			frameStart: 1,
			frameEnd: 35
		},
		'glasses_symbol': {
			frameStart: 1,
			frameEnd: 35
		},
		'ron_symbol': {
			frameStart: 1,
			frameEnd: 36
		},
		'hat_symbol': {
			frameStart: 1,
			frameEnd: 35
		},
		'van_symbol': {
			frameStart: 1,
			frameEnd: 35
		},
		'scotch_symbol': {
			frameStart: 1,
			frameEnd: 35
		},
		'wild_symbol': {
			frameStart: 1,
			frameEnd: 35
		}
	},

	SymbolsNames: {
		'Symbol_Wheel_Bonus': 'wheelbonus_symbol',
		'Symbol_Baxter': 'baxter_symbol',
		'Symbol_Brian': 'brian_symbol',
		'Symbol_Champ': 'champ_symbol',
		'Symbol_Brick': 'brick_symbol',
		'Symbol_Glasses': 'glasses_symbol',
		'Symbol_Ron': 'ron_symbol',
		'Symbol_Hat': 'hat_symbol',
		'Symbol_Van': 'van_symbol',
		'Symbol_Scotch': 'scotch_symbol',
		'Symbol_Wild': 'wild_symbol',
	},

	ScatterNames: [''],

	prepare: function() {

		this.PrecisionFragment = Settings["precision-fragment"];

	},

	ready: function () {

		MRAID.track('Assets Loaded');

		this.cacheScreenTextures();

		if (Settings["publisher"] === "playable-kit") {

			PlayableKit.onStart(function(options) {

				App.startGame();

			});

			PlayableKit.start();

		} else if (Settings["publisher"] === "facebook-instant-games") {

			if (window.FBInstant) {

				FBInstant.startGameAsync().then(function() {

					App.startGame();

				});

			} else {

				App.startGame();

			}

		} else {

			if (Settings['start-on'] === 'ready') {

				MRAID.onReady(function () {

					App.startGame();

				});

			} else if (Settings['start-on'] === 'viewable') {

				MRAID.onViewable(function() {

					App.startGame();

				});

			} else if (Settings['start-on'] === 'load') {

				App.startGame();

			}

		}

	},

	startGame: function() {

		this.escalibur = new Escalibur();

		if (!App.Loader || !App.Loader.loadCompleted) {

			if (Settings['start-on'] === "none") Settings['start-on'] = 'load';

			return;

		}

		document.body.appendChild(this.Renderer.view);

		MRAID.showApp();

		App.scale = [1.5,1];
        App.resize();

		if (Settings['cta-only']) App.CallToAction.show();

		else App.Gameplay.show();

		Loader.hideLoadProgress();

		App.startTicker();

    }

});
