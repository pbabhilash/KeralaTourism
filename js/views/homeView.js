define([
	'text!templates/tplHome.html',
	'views/topBarView',
	'core'
], function (template, HeaderView, core) {

	return Backbone.View.extend({

		el: '',

		initialize: function () {},

		render: function () {
		   
		   var output = core.translate(template);
		   this.$el.html(output);
		   
		   var headerView = new HeaderView({ el: $('.topBar')});
           headerView.render();
		}

	});

});
