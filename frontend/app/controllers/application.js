import Ember from "ember";

var ApplicationController = Ember.Controller.extend({
  actions: {
    search: function() {
      this.transitionToRoute('/profiles/' + this.get('name'));
    }
  }
});

export default ApplicationController;
