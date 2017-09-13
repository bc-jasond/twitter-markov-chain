import exampleHtml from './example.html';

class Controller {
  $onInit() {}
}

export default {
  template: exampleHtml,
  controllerAs: 'example',
  bindings: {
    tweet: '<',
  },
  controller: Controller,
};
