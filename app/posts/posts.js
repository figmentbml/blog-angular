'use strict';

var posts = angular.module('blog.posts', ['ngRoute']);

posts.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/posts', {
    templateUrl: 'posts/posts.html',
    controller: 'PostsCtrl'
  }).
  when('/posts/new', {
    templateUrl: 'posts/new.html',
    controller: 'NewPostCtrl'
  }).
  when('/posts/:postId', {
    templateUrl: 'posts/post.html',
    controller: 'PostDetailCtrl'
  });
}]);


posts.controller('PostsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('http://localhost:3000/posts/').success(function(data) {
    $scope.posts = data.posts;
  });
}]);

posts.controller('PostDetailCtrl', ['$scope', '$routeParams', '$http',
function($scope, $routeParams, $http) {
  $http.get('http://localhost:3000/posts/' + $routeParams.postId).success(function(data) {
    $scope.post = data.post;
  });
}]);

posts.controller('NewPostCtrl', ['$scope','$http', '$location',
function($scope, $http, $location) {
  $scope.createPost = function() {
    $http.post('http://localhost:3000/posts/', { title: $scope.title, body: $scope.body });
    $scope.title = '';
    $scope.body = '';
    $location.path('/posts');
  };

}]);
