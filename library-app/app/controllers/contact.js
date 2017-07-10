import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {

        saveMessage() {
            const email = this.get("emailAddress");
            const message = this.get("messageBody");
            const newContact = this.store.createRecord('contact', {email: email, message: message});
            newContact.save().then((response) => {
                this.set('successMessage', "Thank you! We will examine your message at the earliest opportunity!");
                this.set('messageBody', '');
            });
        }
    },
    isEmailValid:   Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isTextValid: Ember.computed.gte('messageBody.length', 5),
    isValid: Ember.computed.and('isEmailValid', 'isTextValid'),
    isDisabled: Ember.computed.not('isValid'),
    messageBODY: Ember.observer('messageBody', function() {
        console.log('messageBODY function is called: ', this.get('messageBody'));
    })
});
