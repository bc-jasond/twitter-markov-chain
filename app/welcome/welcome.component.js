import html from './welcome.html';

class Controller {
  constructor($rootScope) {
    'ngInject';
    this.$rootScope = $rootScope;
  }
  $onInit() {}
}

export default {
  template: html,
  controllerAs: 'welcome',
  controller: Controller,
};
