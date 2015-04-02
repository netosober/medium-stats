import Ember from "ember";

var ProfilesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('profile');
  }
});

export default ProfilesRoute;
