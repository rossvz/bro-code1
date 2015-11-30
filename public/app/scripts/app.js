'use strict';

/**
 * @ngdoc overview
 * @name brocodiusApp
 * @description
 * # brocodiusApp
 *
 * Main module of the application.
 */
angular
  .module('brocodiusApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/library', {
        templateUrl: 'views/library.html',
        controller: 'LibraryCtrl',
        controllerAs: 'library'
      })
      .when('/song', {
        templateUrl: 'views/song.html',
        controller: 'SongCtrl',
        controllerAs: 'song'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/setlist', {
        templateUrl: 'views/setlist.html',
        controller: 'SetlistCtrl',
        controllerAs: 'setlist'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
