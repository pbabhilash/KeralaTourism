
// RequireJS configuration
require.config({
	paths: {
		
		//Bower dependencies
		jquery: '../libs/jquery',
		underscore: '../libs/underscore',
		backbone: '../libs/backbone',
		bootstrap: '../libs/bootstrap',
		
		//requirejs plugins
        text: '../libs/text'

	},
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		bootstrap: {
			deps: ['jquery']
		}
	}
});

// Define jQuery as AMD module
define.amd.jQuery = true;

// bootstrap the application
require([
	'router',
	'core',
], function (Router) {

	Router.initialize();
	
	Backbone.history.start({
		pushState: true
	});
});
