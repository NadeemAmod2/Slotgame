//-----------------------------------------------------------------------------
// Filename : Class.js
//-----------------------------------------------------------------------------
// Language : Javascript
// Date of creation : 05.09.2016
// Require: underscore.js
//-----------------------------------------------------------------------------
// Javascript classes constructor
//-----------------------------------------------------------------------------

/**
 en: Internal function which uses to create Screen, Game, Broadcast and other classes
 ru: Это внутренняя функция из которой создаются Screen, Game, Broadcast и другие классы

	var Screen = new Class({

		classMethod: function() {},

		classProperty: true

	});

 @class Class
 @constructor
 @param {Object} properties &nbsp;
 en: Object with a set of methods and properties for the class
 ru: Объект с методами и свойствами класса
 @private
 */
var Class = function(props_1) {

	var cl = function(props_2) {

		var instance = this,
			props, i, m;

		for (var i in props_1) if (props_1.hasOwnProperty(i) && i !== 'initialize') {

			instance[i] = props_1[i];

		}

		for (m = 0; cl._mixins[m]; m++) {

			props = cl._mixins[m];

			for (i in props) if (props.hasOwnProperty(i) && i !== 'initialize') {

				instance[i] = props[i];

			}

		}

		for (i in props_2) if (props_2.hasOwnProperty(i) && i !== 'initialize') {

			instance[i] = props_2[i];

		}

		if (props_1.initialize) props_1.initialize.apply(instance, arguments);

		if (props_2.initialize) props_2.initialize.apply(instance, arguments);

		for (m = 0; cl._mixins[m]; m++) {

			props = cl._mixins[m];

			if (props.initialize) props.initialize.apply(instance, []);

		}

	};

	return cl;

};

/**
 en: Add mixin object for the class. All methods and properties of this object will be copied to each class instances.
 ru: Добавляет mixin объект к указанному классу. Все свойства и методы этого объекта будут скопированы в каждый экземпляр класса.

 	Class.Mixin(Screen, {

		newMethod: function() {},

		newProperty: true

	});

 @method Mixin
 @param {Class} target &nbsp;
 en: Target class
 ru: Целевой класс
 @param {Object} properties &nbsp;
 en: Mixin object with additional properties and methods
 ru: Объект с дополнительными методами и свойствами
 @static
 */

/**
 en: Array of the mixin objects for the class. All methods and properties of these objects will be copied to each class instances.
 ru: Массив с mixin объектами. Все свойства и методы этих объектов будут скопированы в каждый экземпляр класса.

 @property _mixins
 @type Array
 @private
 */

Class.Mixin = function(target, properties) {

	if (!target._mixins) target._mixins = [];

	target._mixins.push(properties);

	return properties;

};
