//-----------------------------------------------------------------------------
// Filename : Screen.js
//-----------------------------------------------------------------------------
// Language : Javascript
// Date of creation : 05.09.2016
// Require: Class.js
//-----------------------------------------------------------------------------
// Set of groups with sprites, which can easy added / removed from stage as one logical object
//-----------------------------------------------------------------------------

/**
 en: This class creates a tree of a display objects (sprites), which can be easily added / removed from the stage as one logical object.
 ru: Этот  класс создаёт дерево отображаемых объектов (спрайтов), которые могут быть легко добавлены и удалены с экрана как один логический объект.

 en: Example of usage:
 ru: Пример использования:

	App.Gameplay = new Screen({

		Name: "Gameplay",

		en://Assets section. Here you can specify images, sounds, fonts and other assets to preload for this screen
		ru://Секция Assets. Сдесь можно указать какие изображения, звуки, шрифты и прочее нужно загрузить для нормальной работы этого скрина
		Assets: [
			{name: 'background.jpg', type: 'image', path: 'Images/background.jpg'}
		],

		en://Containers section. Here you can create all screen sprites, texts, containers, emitters and other game elements.
		ru://Секция Containers. По информации из этой секции автоматически создаются все спрайты, текстовые спрайты, эмиттеры и прочие элементы игры
		Containers: [
			{name: 'BackgroundContainer', childs: [
				{name: 'my image', type: 'sprite', image: 'background.jpg', position: [100, 100], button: true}
			]}
		],

		en://Events section. Here you can add subscribers on any game event, include sprite events.
		ru://Секция Events. Здесь можно подписаться на различные события игры, включая нажатия на спрайты
		Events: {

			'Gameplay build': function(){

				this.someProperty = 'value';

				this['my image'].position.set(200, 300)

			},

			'Gameplay showed': function() {

				this.someMethod();

			},

			'Gameplay my image click': function(sprite, event) {

				en://This is a click event listener for the 'my image' display object (works only if specified 'button: true' or 'event: true')
				ru://Функция подписчик на событие click для 'my image' спрайта (работает только если указано 'button: true' или 'event: true')

			},

			'Stage Press Up': function() {

				en://Global stage press up event listener
				ru://Функция подписчик на глобальное событие нажатия на сцену

			}

		},

		someMethod: function() {

		}

	});

 @class Screen
 @constructor
 @param {Object} properties &nbsp;
 en: Object with a set of methods and properties for the resulting instance
 ru: Объект с методами и свойствами создаваемого экземпляра Screen
 */
var Screen = new Class({

	/**
	 en: Name of the Screen instance. This name uses like prefix for all events of screen instance.
	 ru: Имя экземпляра класса Screen. Это имя используется как префикс для всех событий этого экземпляра.

	App.Gameplay = new Screen({

		Name: "Gameplay",

		Events: {

			'Gameplay showed': function(){

				en://This is a showed event listener of this instance of Screen class (required Name property of class)
				ru://Это функция-подписчик события showed этого экземляра класса Screen (привязывается к Name свойству автоматически)

			},

			'Tutorial showed': function(sprite, event) {

				en://This is a showed event listener of another instance of Screen class (because there are no Gameplay prefix)
				ru://Это функция-подписчик события showed другого экземляра класса Screen (потому что нет приставки Gameplay)

			}

		}

	});

	 @property Name
	 @type String
	 @required
	 */

	/**
	 en: Display objects tree (sprites and containers). All sprites, containers and other display objects
	 en: builds automatically by the information from this object. For each sprite you can specify position,
	 en: scale, alpha and other properties, just separately for the landscape and portrait orientations.
	 ru: Дерево отображаемых объектов (спрайты и контейнеры). По информации из этого объекта строятся
	 ru: автоматически все спрайты, контейнеры и другие отображаемые объекты. Для каждого объекта можно
	 ru: указать позицию (position), масштабирование (scale), прозрачность (alpha) и множество других свойств.
	 ru: Причём всё это можно указать отдельно для пейзажной и портретной ориентации.

	 en: The name of sprite will be used to link it's object to Screen instance. this['my sprite'] ===
	 en: App.Gameplay['my sprite'] === created sprite with background.jpg image.
	 ru: Имя спрайта используется
	 ru: для обращений к нему this['my sprite'] === App.Gameplay['my sprite'] === созданному спрайту из изображения background.jpg.
	 ru: Это имя используется и в секции Events чтобы подписаться на события этого спрайта.

	 en: All properties from this section will be automatically copied into Pixi.Sprite object, so you can use here any properties.
	 en: But you need to know that all these properties applies again on screen resize and on screen show() method call.
	 ru: Все свойства указанные в этом объекте будут автоматически скопированы в объект спрайта - поэтому здесь можно указывать всё что поддерживает Pixi.
	 ru: Но нужно учитывать что все эти свойства копируются в объекты каждый раз при изменении размеров экрана и каждый раз при вызове метода show() этого скрина.

	App.Gameplay = new Screen({

		Name: "Gameplay",

		Containers: [
			{name: 'BackgroundContainer', childs: [
				{name: 'my sprite', type: 'sprite', image: 'background.jpg', positionPortrait: [100, 100], positionLandscape: [200, 200]}
			]}
		]

	});

	 @property Containers
	 @type Object
	 @required
	 */

	/**
	 en: Hash of Screen events subscribers. You can subscribe code on any event here.
	 en: All app events have one broadcast point (this is Broadcast object). Here you can subscribe functions
	 en: on any application event, not only this Screen instance.
	 ru: Объект с подписчиками событий. Вы можете подписаться здесь на любое событие.
	 ru: Все события приложения имеют одну точку запуска (это Broadcast объект). Здесь вы можете подписаться
	 ru: на любое событие а не только на события данного экземпляра Screen.

	App.Gameplay = new Screen({

		Name: "Gameplay",

		Events: {

			'Gameplay before build': function(){

				en://This event is dispatched before sprites from Container section will be created. You can change something dynamically in Containers section here.
				ru://Событие запускающееся перед тем как будут созданы спрайты из секции Containers. Здесь можно что-то динамически изменить в секции Containers

			},

			'Gameplay build': function(){

				en://This event is dispatched after sprites from Container section will be created. You can use this event like constructor to initialize starting values.
				ru://Событие запускающееся после создания спрайтов из секции Containers. Это событие можно использовать как конструктор и инициализировать здесь необходимые для игры данные.

			},

			'Gameplay showed': function() {

				en://This event is dispatched when current Screen instance shows on the screen, after App.Gameplay.show() method call.
				ru://Событие запускающееся после того как скрин Gameplay покажется на экране. Это в свою очередь происходит после запуска метода App.Gameplay.show()

			},

			'Gameplay hided': function() {

				en://This event is dispatched when current Screen instance hides from the screen, after App.Gameplay.hide() method call.
				ru://Событие запускающееся после того как скрин Gameplay скроется с экрана. Это в свою очередь происходит после запуска метода App.Gameplay.hide()

			},

			'Gameplay resize': function() {

				en://This event is dispatched on screen resize and device orientation changing. Also it is dispatched every time after App.Gameplay.show() method call.
				ru://Событие запускающееся при изменении размеров сцены (и как правило размеров или ориентации экрана устройства), а также каждый раз после вызова App.Gameplay.show()

			},

			'Gameplay update': function() {

				en://This event is dispatched on every game tick, about 60 timer per second. Be carefully to place any code here!
				ru://Событие запускающееся на каждый фрейм (перерисовку экрана). Оно вызывается 60 раз в секунду, поэтому нужно хорошо подумать прежде чем писать здесь какой-либо код.

			},

			'Gameplay my image click': function(sprite, event) {

				en://This is a click event listener for the 'my image' display object (works only if specified 'button: true' or 'event: true' in a params of sprite)
				ru://Функция подписчик на событие click для 'my image' спрайта (работает только если указано 'button: true' или 'event: true' в параметрах спрайта)

			},

			'Stage Press Up': function() {

				en://Global stage press up event listener
				ru://Функция подписчик на глобальное событие нажатия на сцену

			}

		}

	});

	 @property Events
	 @type Object
	 */
	initialize: function() {

		App.registerScreen(this);

		this._containers = [];

		this._childs = [];

		this.tick = 0;

		this._update_ticks = null;

		this.state = 'idle';

		this.each(this.Events, function(func, name) {

			Broadcast.on(name, function screen_events_wrapper() {

				func.apply(this, arguments);

			}, this);

			if (name.indexOf(this.Name + ' update tick') === 0) {

				if (!this._update_ticks) this._update_ticks = {};

				var tick = name.replace(this.Name + ' update tick ', '');

				this._update_ticks[tick] = {
					tick: parseInt(tick),
					event: name
				};

			}

		});

	},

	/**
	 en: Internal method where Screen build root containers of it`s display objects tree.
	 en: Before build root containers it calls {{#crossLink "Screen/before build:event"}}{{/crossLink}}
	 en: and {{#crossLink "Screen/build:event"}}{{/crossLink}} event after build containers and all child objects
	 ru: Внутренний метод где экземпляр класса Screen строит корневые контейнеры его дерева спрайтов.
	 ru: Перед созданием корневых контейнеров вызывается событие {{#crossLink "Screen/before build:event"}}{{/crossLink}}
	 ru: а после создания всего дерева спрайтов вызывается событие {{#crossLink "Screen/build:event"}}{{/crossLink}}

	 @private
	 @method build
	 */
	build: function() {

		/**
		 en: Fired before Screen sprites will be built, so you can modify screen {{#crossLink "Screen/Containers:property"}}Containers{{/crossLink}} property here.
		 ru: Вызывается перед созданием спрайтов, поэтому можно успеть модифицировать {{#crossLink "Screen/Containers:property"}}дерево спрайтов{{/crossLink}} класса.

		 @event before build
		 */
		Broadcast.call(this.Name + ' before build');

		this.each(this.Containers, function(container_params) {

			if (!container_params.position) container_params.position = ['width/2', 'height/2'];
			if (!container_params.scale) container_params.scale = 'scale';
			if (!container_params.type) container_params.type = 'container';

			if (container_params.type === 'container') {

				var container = this.buildChild(App.Stage, container_params);

				this._containers.push(container);

				container.visible = false;

				if (container_params.childs) this.buildChilds(container_params.childs, container);

			}

		});

		this.updateTime = 0;

		this.isBuild = true;

		/**
		 en: Fired after all Screen display objects tree will be built. In this event listener you can create
		 en: dynamical display objects and initialize needed game properties, for example score set to 0.
		 ru: Вызывается после того как будут созданы все контейнеры и спрайты. В подписчике на это событие
		 ru: можно динамически достроить некоторые элементы игры и задать начальные параметры, например счёт установить в 0.

		 @event build
		 */
		Broadcast.call(this.Name + ' build');

	},

	/**
	 en: Internal method where Screen build root container`s children display objects.
	 en: It calls buildChild for the root containers and recursively buildChilds for children display objects.
	 ru: Внутренний метод в котором экземпляр Screen создаёт дочерние отображаемые объекты его корневых контейнеров.
	 ru: Этот метод вызывает buildChild для каждого корневого контейнера и рекурсивно buildChilds для дочерних объектов.

	 @private
	 @method buildChilds
	 */
	buildChilds: function(childs, container, is_reposition) {

		var result = [];

		childs = _.sortBy(childs, "zIndex");

		this.each(childs, function(child_params) {

			var child = this.buildChild(container, child_params, is_reposition);

			this._childs.push(child);

			result.push(child);

			if (child_params.childs && child_params.type !== 'three-viewport') this.buildChilds(child_params.childs, child, is_reposition);

		});

		return result;

	},

	/**
	 en: Internal method which calls from {{#crossLink "Game"}}{{/crossLink}} class on every tick
	 en: It broadcast {{#crossLink "Screen/update:event"}}{{/crossLink}} and {{#crossLink "Screen/<screen name> update tick <number>:event"}}{{/crossLink}} events
	 ru: Внутренний метод который вызывается из {{#crossLink "Game"}}{{/crossLink}} класса каждый тик (при каждой перерисовки экрана)
	 ru: Этот метод запускает {{#crossLink "Screen/{screen name} update:event"}}{{/crossLink}} и {{#crossLink "Screen/<screen name> update tick <number>:event"}}{{/crossLink}} события

	 @private
	 @method update
	 */
	update: function() {

		this.updateTimeOffset = PIXI.ticker.shared.elapsedMS;

		if (this.updateTimeOffset > 50) this.updateTimeOffset = 50;

		this.updateTime += this.updateTimeOffset;

		Broadcast.call(this.Name + ' update');

		if (this._update_ticks) {

			this.each(this._update_ticks, function(params) {

				if (this.tick % params.tick === 0) {

					/**
					 en: Fired on every update tick. In the start of this event name you need to specify Screen {{#crossLink "Screen/Name:property"}}{{/crossLink}} value
					 ru: Вызывается на каждый тик перерисовки экрана. Перед названием этого события всегда нужно писать {{#crossLink "Screen/Name:property"}}{{/crossLink}} экземпляра Screen

					 @event update tick <number>
					 */
					if (params.event) Broadcast.call(params.event);

				}

			});

		}

		this.tick++;

	},

	/**
	 en: Internal method which calls from {{#crossLink "Game"}}{{/crossLink}} class on screen resize and orientation change events.
	 en: This method apply all settings from {{#crossLink "Screen/Containers:property"}}{{/crossLink}} object again into all sprites.
	 en: It also broadcast {{#crossLink "Screen/before resize:event"}}{{/crossLink}} and {{#crossLink "Screen/resize:event"}}{{/crossLink}} events.
	 ru: Внутренний метод, который вызывается из {{#crossLink "Game"}}{{/crossLink}} класса каждый раз при изменении размеров экрана или смены ориентации.
	 ru: Этот метод переустанавливает опять все настройки из {{#crossLink "Screen/Containers:property"}}{{/crossLink}} всем спрайтам и другим отображаемым объектам.
	 ru: Здесь также вызываются события {{#crossLink "Screen/before resize:event"}}{{/crossLink}} и {{#crossLink "Screen/resize:event"}}{{/crossLink}}

	 @private
	 @method resize
	 */
	resize: function() {

		this.Scale = App.Scale;

		if (this.isBuild) Broadcast.call(this.Name + ' before resize');

		this.each(this._containers, function(container) {

			const child_params = container.params;

			if (child_params.type === 'container') {

				var child = this[child_params.name];

				if (child) this.applyParams(child, child.params);

				if (child_params.childs) this.resizeChilds(child_params.childs);

			}

		});

		if (this.isBuild) Broadcast.call(this.Name + ' resize');

	},

	/**
	 en: Internal method which calls from {{#crossLink "Screen/resize:method"}}{{/crossLink}}.
	 ru: Внутренний метод который вызывается из {{#crossLink "Screen/resize:method"}}{{/crossLink}},
	 ru: но так же может использоваться как публичный.

	 @private
	 @method resizeChilds
	 */
	resizeChilds: function(childs) {

		this.each(childs, function(child_params) {

			var child = this[child_params.name];

			if (child) this.applyParams(child, child.params);

			if (child_params.childs && child_params.type !== 'three-viewport') this.resizeChilds(child_params.childs);

		});

	},

	/**
	 en: Internal method which calculate scale for the root containers by scaleStrategy property
	 ru: Внутренний метод который высчитывает масштаб корневых контейнеров используя свойство scaleStrategy

	 @private
	 @method getScaleByStrategy
	 */
	getScaleByStrategy: function(scale_strategy) {

		var scale = [1,1],
			width = App.Width,
			height = App.Height,
			max_scale = [100000,100000];

		if (!Array.isArray(scale_strategy)) scale_strategy = [scale_strategy];

		if (scale_strategy[0] === 'fit-to-screen') {

			if (scale_strategy[1]) width = scale_strategy[1];
			if (scale_strategy[2]) height = scale_strategy[2];

			scale = [App.Width / width, App.Height / height];

			if (scale_strategy[3] === false) max_scale = [1,1];
			else if (scale_strategy[3] === 'pixel-ratio') max_scale = [App.PixelRatio,App.PixelRatio];

			if (scale > max_scale) scale = max_scale;

		} else if (scale_strategy[0] === 'cover-screen') {

			if (scale_strategy[1]) width = scale_strategy[1];
			if (scale_strategy[2]) height = scale_strategy[2];

			scale = [App.Width / width, App.Height / height];

			if (scale_strategy[3] === false) max_scale = [1,1];
			else if (scale_strategy[3] === 'pixel-ratio') max_scale = [App.PixelRatio,App.PixelRatio];

			if (scale > max_scale) scale = max_scale;

		}

		return scale;

	},

	/**
	 en: Internal method which calculate value of the position, scale and other properties.
	 ru: Внутренний метод который высчитывает значение позиции, масштаба и прочих свойств.
	 ru: Значение свойства может быть указано через функцию или строку, а эта функция преобразует его к числу.

	 @private
	 @method calculate
	 */
	calculate(value, fixed_multiplier, special_multiplier, initial_value) {

		if (!value) value = 0;

		if (!fixed_multiplier) fixed_multiplier = 1;

		if (!special_multiplier) special_multiplier = 1;

		if (!Array.isArray(value)) value = [value];

		let result = 0;

		this.each(value, function(part) {

			if (typeof part === 'string') {

				let direction_multiplier = 1;
				let offset_value = false;

				if (part.indexOf('-') === 0) {

					offset_value = true;

					part = part.substr(1);

					direction_multiplier = -1;

				} else if (part.indexOf('+') === 0) {

					offset_value = true;

					part = part.substr(1);

					direction_multiplier = 1;

				}

				if (part === 'width') result += App.Width * special_multiplier * direction_multiplier;

				else if (part === 'height') result += App.Height * special_multiplier * direction_multiplier;

				else if (part === 'scale') result += App.Scale * special_multiplier * direction_multiplier;

				else if (part.indexOf('width/') === 0) result += App.Width / parseFloat(part.replace('width/', '')) * special_multiplier * direction_multiplier;

				else if (part.indexOf('height/') === 0) result += App.Height / parseFloat(part.replace('height/', '')) * special_multiplier * direction_multiplier;

				else if (part.indexOf('width*') === 0) result += App.Width * parseFloat(part.replace('width*', '')) * special_multiplier * direction_multiplier;

				else if (part.indexOf('height*') === 0) result += App.Height * parseFloat(part.replace('height*', '')) * special_multiplier * direction_multiplier;

				else if (part.indexOf('scale/') === 0) result += App.Scale / parseFloat(part.replace('scale/', '')) * special_multiplier * direction_multiplier;

				else if (part.indexOf('scale*') === 0) result += App.Scale * parseFloat(part.replace('scale*', '')) * special_multiplier * direction_multiplier;

				else if (part === 'initial') result += initial_value;

				else if (offset_value) result += initial_value + parseFloat(part) * direction_multiplier;

				else result = part;

			} else if (typeof part === 'function') {

				const f_result = part.apply(this, []);

				if (typeof f_result === 'string') result = f_result;

				else result += f_result;

			} else {

				result += part * fixed_multiplier;

			}

		}, this);

		return result;

	},

	valueBySpeed: function(value_per_second) {

		return value_per_second * (this.updateTimeOffset / 1000);

	},

	/**
	 en: This method shows all screen containers and sprites using visible property of root containers.
	 ru: Этот метод показывает все спрайты и контейнеры используя visible свойство корневых контейнеров.
	 ru: Здесь так же происходит подписка на события Game Update и Game Resize, и запуск события showed.

	 @method show
	 */
	show: function() {
		this.showed = true;

		for (var i=0; this._containers[i]; i++) this._containers[i].visible = true;

		this.resize();

		Broadcast.on("Game Update", this.update, this);

		Broadcast.on("Game Resize", this.resize, this);

		/**
		 en: Fired then current screen shows. In the start of this event name you need to specify Screen {{#crossLink "Screen/Name:property"}}{{/crossLink}} value
		 ru: Вызывается когда текущий скрин показывается на экране. Перед названием этого события всегда нужно писать {{#crossLink "Screen/Name:property"}}{{/crossLink}} экземпляра Screen

		 @event showed
		 */
		Broadcast.call(this.Name + ' showed', arguments);

		this.checkAssets();
	},

	/**
	 en: This method hides all screen containers and sprites using visible property of root containers.
	 ru: Этот метод скрывает все спрайты и контейнеры используя visible свойство корневых контейнеров.
	 ru: Здесь так же происходит отписка от событий Game Update и Game Resize, и запуск события hided.

	 @method hide
	 */
	hide: function() {

		this.showed = false;

		for (var i=0; this._containers[i]; i++) this._containers[i].visible = false;

		Broadcast.off("Game Update", this);

		Broadcast.off("Game Resize", this);

		/**
		 en: Fired then current screen hides. In the start of this event name you need to specify Screen {{#crossLink "Screen/Name:property"}}{{/crossLink}} value
		 ru: Вызывается когда текущий скрин скрывается. Перед названием этого события всегда нужно писать {{#crossLink "Screen/Name:property"}}{{/crossLink}} экземпляра Screen

		 @event hided
		 */
		Broadcast.call(this.Name + ' hided');

	},

	/**
	 en: Inner method which allows to load assets only after it will be showed on the screen
	 ru: Внутренний метод позволяющий загружать ресурсы только когда они покажутся на экране

	 @private
	 @method checkAssets
	 */
	checkAssets: function() {

		if (this.assetsLoadOnShowChecked) return;

		var assets_for_loading = [];

		this.each(this.Assets, function(asset) {

			if (asset.loadStrategy === 'first show') assets_for_loading.push(asset.name);

		});

		this.assetsLoadOnShowChecked = true;

		var _this = this;

		if (assets_for_loading.length > 0) App.loadAssets(assets_for_loading, this.bind(function() {

			this.each(_this._childs, function(child) {

				var child_params = child.params;

				if (child_params.type === 'sprite') {

					if (child.texture === App.emptyTexture) child.texture = this.getTexture(child_params.frame || child_params.image);

				}

			});

		}), {strategy: 'first show'});

	},

	/**
	 en: Returns display object params object from {{#crossLink "Screen/Containers:property"}}{{/crossLink}} property by name.
	 ru: Возвращает параметры спрайта из дерева контейнеров ({{#crossLink "Screen/Containers:property"}}{{/crossLink}}) по имени.

	 @method getChildParamsByName
	 @return {Object} &nbsp;
	 en: Child params
	 ru: Свойства спрайта из дерева контейнеров {{#crossLink "Screen/Containers:property"}}{{/crossLink}}
	 */
	getChildParamsByName: function(name) {

		var child_params = null;

		var iterate = _.bind(function(childs_params) {

			for (var i=0, l=childs_params.length; i<l; i++) {

				if (childs_params[i].name === name) child_params = childs_params[i];

				if (child_params) break;

				if (childs_params[i].childs) iterate(childs_params[i].childs);

			}

		});

		iterate(this.Containers);

		return child_params;

	},

	/**
	 en: Merge new child params into {{#crossLink "Screen/Containers:property"}}{{/crossLink}} tree by name
	 ru: Устанавливает новые параметры спрайтов в {{#crossLink "Screen/Containers:property"}}{{/crossLink}} секцию по имени объекта, заменяя старые значения

	 	App.Gameplay = new Screen({

	 		Name: "Gameplay",

	 		Containers: [
	 			{name: 'BackgroundContainer', childs: [
	 				{name: 'background', type: 'sprite', image: 'background.jpg', position: [100, 100], childs: {
	 					{name: 'sprite one', type: 'sprite', image: 'sprite1.png', scale: 2},
	 					{name: 'sprite two', type: 'text', styles: {fontSize: '20px'}},
	 				}}
	 			]}
	 		]

	 	});

	 	this.updateChildParamsByName({
	 		'background': {position: [0, 0]},
	 		'sprite one': {scale: 3, position: [10, 20]},
	 		'sprite two': {text: '12345', styles: {fontSize: '10px', fontFamily: 'Arial'}}
	 	});

	 	en://Containers will be:
	 	ru://Containers станет таким:

	 	Containers: [
	 		{name: 'BackgroundContainer', childs: [
	 			{name: 'background', type: 'sprite', image: 'background.jpg', position: [0, 0], childs: {
	 				{name: 'sprite one', type: 'sprite', image: 'sprite1.png', scale: 3, position: [10, 20]},
	 				{name: 'sprite two', type: 'text', text: '12345', styles: {fontSize: '10px', fontFamily: 'Arial'}},
	 			}}
	 		]}
	 	]


	 @method updateChildParamsByName
	 @param new_child_params {Object}
	 en: Hash of new sprite properties for the {{#crossLink "Screen/Containers:property"}}{{/crossLink}} section
	 ru: Хэш новых свойств спрайтов для {{#crossLink "Screen/Containers:property"}}{{/crossLink}} секции
	 */
	updateChildParamsByName: function(new_child_params) {

		if (!new_child_params) return;

		var iterate = this.bind(function(exist_childs_params) {

			for (var i=0, l=exist_childs_params.length; i<l; i++) {

				if (new_child_params[exist_childs_params[i].name]) {

					this.merge(exist_childs_params[i], new_child_params[exist_childs_params[i].name]);

				}

				if (exist_childs_params[i].childs) iterate(exist_childs_params[i].childs);

			}

		});

		iterate(this.Containers);

	},

	/**
	 en: Returns hexadecimal Number value of color if it in String type.
	 ru: Преобразует строковое шестнадцатеричное значение цвета в числовое

	 const color1 = this.stringColorToDecimal('#ff9900');
	 const color2 = this.stringColorToDecimal(0xff9900);

	 en://'color1' and 'color2' will be 0xff9900
	 ru://'color1' и 'color2' будут равны 0xff9900

	 @method stringColorToDecimal
	 @param value {String|Number}
	 en: String hexadecimal value of color
	 ru: Строковое шестнадцатеричное значение цвета
	 @return {Number}
	 en: Number hexadecimal value of color
	 ru: Числовое шестнадцатеричное значение цвета
	 */
	stringColorToDecimal: function(value) {

		if (typeof value === 'string') {

			if (value.length === 7 && value.indexOf('#') === 0) {

				value = value.replace('#', '');

				value = parseInt(value, 16);

			} else if (value.indexOf('rgba') === 0) {

				value = value.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

				value = ("0" + parseInt(value[1],10).toString(16)).slice(-2) + ("0" + parseInt(value[2],10).toString(16)).slice(-2) + ("0" + parseInt(value[3],10).toString(16)).slice(-2);

				value = parseInt(value, 16);

			}

		}

		return value;

	},

	decimalColorToHex: function(decimal) {

		return typeof decimal === 'number' ? ('#' + decimal.toString(16)) : decimal;

	},

	/**
	 en: Play video if autoplay supported (or user already clicked on application)
	 ru: Запускает проигрывание видео если автопроигрывание поддерживается (или если пользователь уже кликнул по приложению)

	 this.autoplayVideo('video sprite');

	 @method autoplayVideo
	 @param video_sprite {String|Object}
	 en: String name or link to the video sprite object
	 ru: Строковое название или ссылка на объект видео-спрайта
	 @param fn {Function}
	 en: Callback function to receive result (true/false/'muted')
	 ru: Функция в которую будет передан результат запуска (true/false/'muted')
	 @return {Object}
	 en: Specified video sprite
	 ru: Переданный видео-спрайт
	 */
	autoplayVideo: function(video_sprite, fn) {

		if (typeof video_sprite === 'string') video_sprite = this[video_sprite];

		MRAID.isAutoplaySupported(this.bind(function(result) {

			if (result === 'muted') {

				video_sprite.video.muted = true;

				video_sprite.play();

			} else if (result) {

				video_sprite.play();

			}

			if (fn) fn.apply(this, [result]);

		}, this));

		return video_sprite;

	}

}); 
