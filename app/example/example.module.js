import angular from 'angular';
import component from './example.component';
import tweetService from './tweet.service';
/* @ngInject */
export default angular
  .module('example', [])
  .component('example', component)
  .factory('tweetService', tweetService)
