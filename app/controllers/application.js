import Ember from 'ember';

export default Ember.Controller.extend({
    name: "Nevcan",
    showName: true,
    numClicks: 0,
    actions: {
        toggleName () {
            this.toggleProperty('showName');
        },
        incrementClick () {
            this.set('numClicks', this.get('numClicks') + 1 );
        }
    }
});
