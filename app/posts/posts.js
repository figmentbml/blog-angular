'use strict';

var posts = angular.module('blog.posts', ['ngRoute']);

posts.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/posts', {
    templateUrl: 'posts/posts.html',
    controller: 'PostsCtrl'
  }).
  when('/posts/:postId', {
    templateUrl: 'posts/post.html',
    controller: 'PostDetailCtrl'
  });
}]);

posts.controller('PostsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('http://localhost:3000/posts/').success(function(data) {
    $scope.posts = data.posts;
    $scope.users = data.users;
  });
}]);

posts.controller('PostDetailCtrl', ['$scope', '$routeParams', '$http',
function($scope, $routeParams, $http) {
  $http.get('http://localhost:3000/posts/' + $routeParams.postId).success(function(data) {
    $scope.post = data.post;
    $scope.users = data.users;
    $scope.comments = data.comments
  });
}]);
