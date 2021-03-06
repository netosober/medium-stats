import Ember from "ember";

var ProfileRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('profile', {name: params.name}).then(function(profiles){
      return profiles.get('firstObject');
    });
  }
});

export default ProfileRoute;
