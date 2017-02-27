'use strict';

/**
 * @ngdoc overview
 * @name yourSpaceApp
 * @description
 * # yourSpaceApp
 *
 * Main module of the application.
 */
angular
  .module('yourSpaceApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
