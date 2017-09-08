import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngresource from 'angular-resource';
import config from './app.config';
import example from './example/example.module';

require('./main.scss');
angular.module('app', [
  uirouter,
  ngresource,
  example.name,
])
  .config(config);
