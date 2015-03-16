define([
	'text!templates/tpltopBar.html',
	'core'
], function (template, core) {

	return Backbone.View.extend({

		el: '',

		initialize: function () {},

		render: function () {
		   
		   var output = core.translate(template);
		   this.$el.html(output);
		}

	});

});
