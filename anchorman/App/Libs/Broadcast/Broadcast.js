//-----------------------------------------------------------------------------
// Filename : Broadcast.js
//-----------------------------------------------------------------------------
// Language : Javascript
// Author : Alex Sorochinsky
// Date of creation : 08.08.2016
//-----------------------------------------------------------------------------
// Javascript library which realizes observer pattern for both browser and server (Node.js) environment
// Broadcast.on('My event', my_func, this); Broadcast.call('My event'); Broadcast.off('My event', this);
//-----------------------------------------------------------------------------

(function() {

	//Main namespace for library use it for global events
	var Broadcast = {};

	//Implement Broadcast methods to custom object
	Broadcast.make = function(object) {

		var prototype = Broadcast._prototype;

		for (var i in prototype) if (prototype.hasOwnProperty(i)) {

			if (object[i]) Broadcast._warn('Broadcast.make() warning! You try implement Broadcast functionality to custom object, but this object already have the same property.', object, i);

			object[i] = prototype[i];

		}

		object._broadcast_events = {};

		object._broadcast_timeouts = {};

		object._broadcast_codename = 1;

	};

	Broadcast._warn = function() {

		if (typeof console == 'object') {

			if (console.warn) console.warn.apply(console, arguments);
			else if (console.log) console.log.apply(console, arguments);

		}

	};

	Broadcast._getSourceCodename = function(source) {

		if (source._broadcast_codename) return source._broadcast_codename;

		source._broadcast_codename = (source.displayName || source.name || source.Name || 'object') + (Broadcast._index++);

		return source._broadcast_codename;

	};

	Broadcast._index = 1;

	Broadcast._prototype = {};

	Broadcast._prototype.on = function(name, caller, source, options) {

		if (name.indexOf(',') != -1) name = _.map(name.split(','), function(name) {
			return name.trim();
		});

		if (Array.isArray(name)) {

			for (var i=0, l=name.length; i<l; i++) {

				this.on(name[i], caller, source, options);

			}

		} else {

			name = name.toLowerCase();

			if (!options) options = {};

			if (typeof source == 'string') options.index = source;

			else if (source) {

				if (!options.index) options.index = this._getSourceCodename(source);

				if (!options.bind) options.bind = source;

			}

			if (options.index) {

				if (!this._broadcast_events[name]) this._broadcast_events[name] = {};

				this.off(name, options.index);

				if (options && options.index && options.times) {

					var original_func = caller, _this = this;

					caller = function () {

						var args = arguments;

						if (!_this._broadcast_timeouts[name + '-' + options.index]) _this._broadcast_timeouts[name + '-' + options.index] = setTimeout(function () {

							_this._broadcast_timeouts[name + '-' + options.index] = null;

							_this._callSubscriber(original_func, options, args);

						}, options.times);

					}

				}

				this._broadcast_events[name][options.index] = {caller: caller, options: options};

			} else {

				Broadcast._warn('Broadcast.on() warning! You need specify source of the event subscriber or index', name, caller, source, options);

			}

		}

	};

	Broadcast._prototype.once = function(name, caller, source, options) {

		Broadcast.on(name, function() {

			Broadcast.off(name, source);

			caller.apply(this, arguments);

		}, source, options)

	};

	Broadcast._prototype.off = function(name, source) {

		if (!source) Broadcast._warn('Broadcast.off() warning! You need specify source of the event subscriber or index', name, source);

		if (Array.isArray(name)) {

			for (var i=0, l=name.length; i<l; i++) {

				this.off(name[i], source);

			}

		} else {

			name = name.toLowerCase();

			var codename = (typeof source == 'string') ? source : this._getSourceCodename(source);

			var callers = this._broadcast_events[name];
			if (!callers || !callers[codename]) return;

			delete callers[codename];

		}

	};

	Broadcast._prototype.call = function(name, args, options, source) {

		var _this = this;

		if (options && options.delay) {

			setTimeout(function () {

				_this.call(name, args, options);

			}, options.delay);

			delete options.delay;

		} else {

			name = name.toLowerCase();

			var subscriber, opt, callers = this._broadcast_events[name];

			if (!callers) return;

			if (source) {

				var codename = (typeof source == 'string') ? source : this._getSourceCodename(source);

				subscriber = callers[codename];
				opt = callers[codename].options || {};

				if (opt.delay) {

					_this._delay_call(subscriber.caller, opt, args);

				} else {

					_this._call(subscriber.caller, opt, args);

				}

			} else {

				for (var i in callers) if (callers.hasOwnProperty(i)) {

					subscriber = callers[i];
					opt = callers[i].options || {};

					if (opt.delay) {

						_this._delay_call(subscriber.caller, opt, args);

					} else {

						_this._call(subscriber.caller, opt, args);

					}

				}

			}

		}

	};

	Broadcast._prototype._delay_call = function (caller, options, args) {

		var _this = this;

		if (!options.delayTimeout) {

			options.delayTimeout = setTimeout(function () {

				_this._call(caller, options, args);

				options.delayTimeout = null;

			}, options.delay);

		}

	};

	Broadcast._prototype._call = function (caller, options, args) {

		caller.apply(options.bind || this, args || []);

	};

	Broadcast.make(Broadcast);

	var namespace = null;

	if (typeof global == 'object') namespace = global;

	if (typeof window == 'object') namespace = window;

	if (namespace) {

		namespace.__brdcst = Broadcast;

		if (!namespace.Broadcast) namespace.Broadcast = Broadcast;

		else console.info('Broadcast.make() warning! Global Broadcast namespace already in use. Use __brdcst.make(object) to implement Broadcast functionality to custom object.');

	}

})();
