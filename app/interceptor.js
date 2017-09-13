export default ($rootScope) => {
  'ngInject';
  return {
    request(config) {
      $rootScope.loading = true;
      $rootScope.$evalAsync();
      return config;
    },
    requestError(rejection) {
      $rootScope.loading = false;
      return Promise.reject(rejection);
    },
    response(response) {
      $rootScope.loading = false;
      return response;
    },
    responseError(rejection) {
      $rootScope.loading = false;
      return Promise.reject(rejection);
    },
  };
};
