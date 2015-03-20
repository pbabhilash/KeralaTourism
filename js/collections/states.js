define(['models/state'], function(State) {

    var StateCollection = Backbone.Collection.extend({
        model : State,
        url: function(){
            return 'datas/places.json';
        },
        parse: function(response){
            return response.states;
            
        }
    });

    return StateCollection;
}); 