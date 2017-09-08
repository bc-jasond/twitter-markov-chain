/* @ngInject */
export default function TweetService($resource) {

  return $resource('http://localhost:3000/', {}, {
    query: {
      method: 'GET',
      isArray: false,
    },
  });

}
