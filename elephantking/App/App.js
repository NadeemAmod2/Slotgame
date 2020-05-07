var App = new Game({

	ClearBeforeRender: true,
	Antialias: false,
	RoundPixels: false,
	MoveWhenInside: false,
	PrecisionFragment: "mediump",
	Symbols: [
		{
			Image: 'S01_Static.png'
		},
		{
			Image: 'S02_Static.png'
		},
		{
			Image: 'S03_Static.png'
		},
		{
			Image: 'S04_Static.png'
		},
		{
			Image: 'S05_Static.png'
		},
		{
			Image: 'S06_Static.png'
		},
		{
			Image: 'S07_Static.png'
		},
		{
			Image: 'S08_Static.png'
		},
		{
			Image: 'S09_Static.png'
		},
		{
			Image: 'W01_Static.png'
		},
		{
			Image: 'B01_Static.png'
		}
	],

	SymbolsHighlight: {
		'S01_Static.png': {
			frameStart: 1,
			frameEnd: 50
		},
		'S02_Static.png': {
			frameStart: 1,
			frameEnd: 50
		},
		'S03_Static.png': {
			frameStart: 1,
			frameEnd: 50
		},
		'S04_Static.png': {
			frameStart: 1,
			frameEnd: 50
		},
		'S05_Static.png': {
			frameStart: 1,
			frameEnd: 25
		},
		'S06_Static.png': {
			frameStart: 1,
			frameEnd: 25
		},
		'S07_Static.png': {
			frameStart: 1,
			frameEnd: 25
		},
		'S08_Static.png': {
			frameStart: 1,
			frameEnd: 25
		},
		'S09_Static.png': {
			frameStart: 1,
			frameEnd: 25
		},
		'W01_Static.png': {
			frameStart: 1,
			frameEnd: 25
		},
		'B01_Static.png': {
			frameStart: 1,
			frameEnd: 60
		},
		'winBoxAnim.png': {
			frameStart: 1,
			frameEnd: 26
		}
	},

	SymbolsNames: {
		'elephant': 'S01_Static.png',
		'rhinoceros': 'S02_Static.png',
		'zebra': 'S03_Static.png',
		'deer': 'S04_Static.png',
		'heart': 'S05_Static.png',
		'club': 'S06_Static.png',
		'diamond': 'S07_Static.png',
		'spade': 'S08_Static.png',
		'circle': 'S09_Static.png',
		'wild': 'W01_Static.png',
		'win_elephant': 'B01_Static.png',
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
