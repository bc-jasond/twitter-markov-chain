import angular from 'angular';
import routing from './example.route';
import component from './example.component';
import service from './example.service';
import tweetService from './tweet.service';
/* @ngInject */
export default angular
  .module('example', [])
  .component('example', component)
  .factory('exampleService', service)
  .factory('tweetService', tweetService)
  .config(routing);
