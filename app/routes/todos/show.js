import Ember from 'ember';

export default Ember.Route.extend({
    model (params) {
        if (params.id === 1) {
            return {
                id: 1,
                description: "item1"
            }
        } else if (params.id === 2) {
            return {
                id: 2,
                description: "item2"
            }
        }
    }
});
