import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('profiles', { path: '/' });
  this.resource('profile', { path: '/profiles/:id' });
});

export default Router;
