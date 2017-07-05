import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {

        saveMessage() {
            this.set('messageBody', '');
        }
    },
    isEmailValid:   Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isTextValid: Ember.computed.gte('messageBody.length', 5),
    isValid: Ember.computed.and('isEmailValid', 'isTextValid'),
    isDisabled: Ember.computed.not('isValid'),
    stoopidme: Ember.observer('messageBody', function() {
        console.log('stoopidme function is called: ', this.get('messageBody'));
    })
});
