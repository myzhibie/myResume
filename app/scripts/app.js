'use strict';

/**
 * @ngdoc overview
 * @name myproApp
 * @description
 * # myproApp
 *
 * Main module of the application.
 */
angular
  .module('myproApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$resourceProvider','$routeProvider',function ($resourceProvider,$routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/test',{
          templateUrl:'views/test.html',
          controller:'TestCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
     $resourceProvider.defaults.stripTrailingSlashes=false;
  }]);
