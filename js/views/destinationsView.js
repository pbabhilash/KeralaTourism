define([
    'text!templates/tplDestinations.html',
    'views/detailPlaceView',
    'core'
], function (template, PlaceDetailView, core) {

    return Backbone.View.extend({

        el: '#main-container',
        

        initialize: function () {},

        render: function () {
           
           var output = core.translate(template, {collections:this.collection});
           this.$el.html(output);

        },
        events:{
         'click .place' : 'selectPlace'   
        },
         selectPlace: function (e) {
            var placeDetail = new PlaceDetailView();
            placeDetail.render();
        }
    });

});
