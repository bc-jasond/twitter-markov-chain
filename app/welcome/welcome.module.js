import angular from 'angular';
import component from './welcome.component';
/* @ngInject */
export default angular
  .module('welcome', [])
  .component('welcome', component);
