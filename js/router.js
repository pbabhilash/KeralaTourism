define([
    'core'
], function (core) {

	  /** Main application router 
     * 
     * @name AppRouter
     * @constructor
     * @augments external:"Backbone.Router"
     */
    var AppRouter = Backbone.Router.extend(
        /** @lends AppRouter.prototype */
        {
            /** The routes object. Contains a main route for the home page and a default route for all other actions.*/
            routes: {
                '': 'homeAction',
                '*actions': 'defaultAction'
            }
        });

    var initialize = function () {
        var app_router = new AppRouter;

        //Home Route
        app_router.on('route:homeAction', function (actions) {
            
            require(['views/homeView'], function (HomeView) {
                try {
                    var homeView = new HomeView({ el: $('body')});
                    homeView.render();
                } catch (error) {
                    
                }

            });
            
            
        });

        //Default Route
        app_router.on('route:defaultAction', function (actions) {
            require(['views/homeView'], function (HomeView) {
                try {
                    var homeView = new HomeView({ el: $('body')});
                    homeView.render();
                } catch (error) {
                    
                }

            });
            
        });

    };

    return { initialize: initialize }
});
