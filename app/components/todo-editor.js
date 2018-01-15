import Component from '@ember/component';

export default Component.extend({
  hasConfirmed: false,
  actions: {
    save: function(model) {
      model.save().then(() => {
        this.sendAction('handleRedirect');
      });
    },
    remove: function(model) {
      model.get('store').findRecord('todo', model.id).then((todo) => {
        todo.destroyRecord();
        this.sendAction('handleRedirect');
      });
    },
    confirm: function() {
      this.toggleProperty('hasConfirmed');
    }
  }
});
