/* @ngInject */
export default function BaseConfig($httpProvider, $resourceProvider, $locationProvider, $urlRouterProvider) {

  $httpProvider.defaults.headers.common.Accept = 'application/json; version=1';

  $resourceProvider.defaults.stripTrailingSlashes = false;

  $locationProvider.html5Mode(true);

  // custom function to keep bad urls in $location when displaying the 404 page
  $urlRouterProvider
    .when('', '/')
    .otherwise(($injector, $location) => {
      const state = $injector.get('$state');
      state.go('404');
      return $location.path();
    });

}