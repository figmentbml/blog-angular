'use strict';

angular.module('blog.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'about/about.html',
    controller: 'AboutCtrl'
  });
}])

.controller('AboutCtrl', ['$scope', function($scope) {

  // inject $http
  // $http get on your server
  // on success, set something on $scope
  // on the rails side remove the config that sets embed :ids, embed_in_root true

}]);
