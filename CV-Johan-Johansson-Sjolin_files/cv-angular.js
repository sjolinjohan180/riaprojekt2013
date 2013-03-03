'use strict';

// Declare app level module which depends on filters, and services
var cvAngularApp = angular.module('cvAngularApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/courses', {
        templateUrl: 'views/courses.html',
        controller: 'CoursesCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/personal', {
        templateUrl: 'views/personal.html',
        controller: 'PersonalCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
