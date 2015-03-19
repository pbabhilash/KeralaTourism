define([
	'text!templates/tplAboutKerala.html',
	'core'
], function (template, core) {

	return Backbone.View.extend({

		el: '#main-container',
		

		initialize: function () {},

		render: function () {
		   
		   var output = core.translate(template);
		   this.$el.html(output);

		},
		
		events:{
		    
        }

	});

});
