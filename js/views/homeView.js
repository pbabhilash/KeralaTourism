define([
	'text!templates/tplHome.html',
	'views/topBarView',
	'views/aboutKeralaView',
	'views/destinationsView',
	'collections/states',
	'core'
], function (template, HeaderView,AboutView, Destination, States, core) {

	return Backbone.View.extend({

		el: '',
		

		initialize: function () {},

		render: function () {
		   
		   var output = core.translate(template);
		   this.$el.html(output);
		   
		   var headerView = new HeaderView({ el: $('.topBar')});
           headerView.render();
		},
		
		events:{
         'click .dashBoardItem' : 'linkClicked'   
        },
         linkClicked: function (e) {
            var key = $(e.currentTarget).attr('data-key');
            
            var view;
            if(key === "about"){
                view = new AboutView();
            }else if(key === "destinations"){
                var states = new States();
              
                states.fetch({async:false});
                
                view = new Destination({collection:states});
            }
            
            view.render();
        }

	});

});
