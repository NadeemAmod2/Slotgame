App.Tutorial = new Screen({

	Name: "Tutorial",

	Containers: [

	],

	Events: {

		'Tutorial before build': function() {

			this.updateChildParamsByName(Settings[this.Name]);

		},

		'Tutorial build': function() {

		},

		'Tutorial showed': function () {

		},

		'Tutorial resize': function() {

		}

	}

});
