define(['models/place'], function(Place) {

    var DestinationCollection = Backbone.Collection.extend({
        model : Place
    });

    return DestinationCollection;
}); 