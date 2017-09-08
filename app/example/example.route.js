function exampleRoutes($stateProvider) {
  $stateProvider
    .state('example', {
      url: '/',
      component: 'example',
      resolve: {
        tweet: (tweetService) => {
          'ngInject';
          return tweetService.query().$promise;
        },
      },
    });
}
/* @ngInject */
export default exampleRoutes;
