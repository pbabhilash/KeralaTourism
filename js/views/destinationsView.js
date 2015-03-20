define([
    'text!templates/tplDestinations.html',
    'core'
], function (template, core) {

    return Backbone.View.extend({

        el: '#main-container',
        

        initialize: function () {},

        render: function () {
           
           var output = core.translate(template, {collections:this.collection});
           this.$el.html(output);

        },
        
        events:{
            
        }

    });

});
