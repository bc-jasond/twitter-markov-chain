function exampleRoutes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      component: 'welcome',
    })
    .state('home.account', {
      url: 'account/:accountId/',
      component: 'example',
      resolve: {
        tweet: (tweetService, $stateParams) => {
          'ngInject';
          return tweetService.query({account: $stateParams.accountId}).$promise;
        },
      },
    });
  ;
}
/* @ngInject */
export default exampleRoutes;
