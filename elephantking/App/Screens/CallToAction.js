App.CallToAction = new Screen({

	Name: "CallToAction",

	Containers: [

	],

	Events: {

		'CallToAction before build': function() {

			this.updateChildParamsByName(Settings[this.Name]);

		},

		'CallToAction build': function() {



		},

		'CallToAction showed': function () {



		},

		'CallToAction resize': function () {



		}

	}

});
