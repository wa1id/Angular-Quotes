'use strict'

angular.module('App', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'assets/views/home.html',
      controller: 'homeCtrl'
    })
    .when('/persons', {
      templateUrl: 'assets/views/persons.html',
      controller: 'personsCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    });
})

.config(function($compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|sms):/);
})

.controller('homeCtrl', ['$scope', function homeCtrl($scope) {

}])

.controller('personsCtrl', ['$scope', function personsCtrl($scope) {

}])
