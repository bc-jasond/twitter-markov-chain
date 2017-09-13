/* @ngInject */
export default function BaseConfig($httpProvider, $resourceProvider, $locationProvider) {

  $httpProvider.defaults.headers.common.Accept = 'application/json; version=1';
  $httpProvider.interceptors.push('interceptor');

  $resourceProvider.defaults.stripTrailingSlashes = false;

  $locationProvider.html5Mode(true);
}
