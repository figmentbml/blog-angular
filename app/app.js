'use strict';

// Declare app level module which depends on views, and components
angular.module('blog', [
  'ngRoute',
  'blog.about',
  'blog.posts',
  'blog.users',
  'blog.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/posts'});
}]);
