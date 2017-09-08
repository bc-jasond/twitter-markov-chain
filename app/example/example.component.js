import exampleHtml from './example.html';

class Controller {
  $onInit() {
    this.title = this.tweet.text;
  }
}

export default {
  template: exampleHtml,
  controllerAs: 'example',
  bindings: {
    tweet: '<',
  },
  controller: Controller,
};
