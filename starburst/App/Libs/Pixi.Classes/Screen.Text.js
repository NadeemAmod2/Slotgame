//-----------------------------------------------------------------------------
// Filename : Screen.Text.js
//-----------------------------------------------------------------------------
// Language : Javascript
// Date of creation : 01.04.2017
// Require: Class.js
//-----------------------------------------------------------------------------
// Set of localization and text manipulation methods
//-----------------------------------------------------------------------------

Class.Mixin(Screen, {

	initialize: function() {

		this.AnimatedTexts = [];

		Broadcast.on(this.Name + ' update', function() {

			this.updateAnimatedTexts();

		}, this, {index: this.Name + '-Text'});

	},

	setText: function(sprite, codename, is_change_params) {

		if (_.isString(sprite)) sprite = this[sprite];

		//if (_.isString(codename)) codename = codename; //TODO: Get value from localization file

		var styles = codename;

		if (_.isString(styles)) styles = {text: styles};

		sprite.text = styles.text;

		this.setTextStyles(sprite, styles, is_change_params);

	},

	setTextStyles: function(sprite, styles, is_change_params) {

		if (_.isString(sprite)) sprite = this[sprite];

		//if (_.isString(styles)) styles = styles; //TODO: Get value from localization file

		if (sprite.params.type === 'text') {

			MRAID.processDynamicProperties(styles);

			_.extend(sprite.style, styles);

		} else if (sprite.params.type === 'multistyle-text') {

			this.each(styles, function(styles) {

				MRAID.processDynamicProperties(styles);

			});

			sprite.style = styles;

		}

		if (is_change_params !== false) _.extend(sprite.params.styles, styles);

		//this.applyParams(sprite, styles);

	},

	drawMessage: function(sprite, message, speed, next, options) {

		this.AnimatedTexts.push({
			time: App.time,
			sprite: sprite,
			message: message || sprite.params.text || sprite.params.txt ||'',
			speed: speed || 1,
			next: next,
			options: options || {}
		});

	},

	drawMessages: function(params, next) {

		let param = params.splice(0, 1)[0];

		if (!param) return next ? next.call(this) : null;

		if (!this.isArray(param)) param = [param];

		param[3] = () => this.drawMessages(params);

		this.drawMessage.apply(this, param);

	},

	animatedTextSubstr: function(string, length, options) {

		var res = [],
			count = 0,
			i, j, l;

		for (i = 0, l = string.length; i < l; i++) {

			if (string.charAt(i) === '<') {

				j = i;
				while (string.charAt(j) !== '>') j++;

				count += 0;
				res.push(string.substr(i, j - i + 1));

				i = j;

			} else if (string.charAt(i) === '\n') {

				count += 0;
				res.push(string.substr(i, 1));

			} else {

				count += 1;
				res.push(string.charAt(i));

			}

			if (count >= length) break;

		}

		var result = res.join('');

		var remaining = string.substr(i+1);

		var chars = [result.substr(result.length-1), remaining.substr(0, 1)];

		if (options.separator === 'word') {

			if (chars[0].indexOf(' ') === 0 || chars[0].indexOf('\n') === 0 || chars[1].indexOf(' ') === 0 || chars[1].indexOf('\n') === 0 || result === string) {

				//Do nothing

			} else {

				result = result.substring(0, Math.max(result.lastIndexOf(' '), result.lastIndexOf('\n')));

			}

		} else if (options.separator === 'line') {

			if (chars[0].indexOf('\n') === 0 || chars[1].indexOf('\n') === 0 || result === string) {

				//Do nothing

			} else {

				result = result.substring(0, result.lastIndexOf('\n'));

			}

		}

		return result;

	},

	updateAnimatedTexts: function() {

		this.each(this.AnimatedTexts, function(animated_text, index) {

			var time = App.time - animated_text.time;

			var chars_count = time / 50 * animated_text.speed;

			var message = this.animatedTextSubstr(animated_text.message, chars_count, animated_text.options);

			animated_text.sprite.text = message;

			if (message.length >= animated_text.message.length) {

				this.AnimatedTexts.splice(index, 1);

				if (animated_text.next) animated_text.next.call(this)

			}

		});

	}

});