import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngresource from 'angular-resource';
import config from './app.config';
import routing from './app.route';
import interceptor from './interceptor';
import example from './example/example.module';
import welcome from './welcome/welcome.module';

require('./main.scss');
angular.module('app', [
  uirouter,
  ngresource,
  example.name,
  welcome.name,
])
  .config(config)
  .config(routing)
  .factory('interceptor', interceptor)
;
