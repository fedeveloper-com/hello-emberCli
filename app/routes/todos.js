import Ember from 'ember';

export default Ember.Route.extend({
    model () {
        return [
            { id: 1, description: "item1" },
            { id: 2, description: "item2" }
        ]; 
    } 
});
