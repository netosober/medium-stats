import Ember from "ember";

var ProfileRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('profile', params.id);
  }
});

export default ProfileRoute;
