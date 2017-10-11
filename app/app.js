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

  .controller('homeCtrl', ['$scope', function homeCtrl($scope) {}])

  .controller('personsCtrl', ['$scope', 'personSrv', function personsCtrl($scope, personSrv) {
    $scope.persons = personSrv.getAllPersons();
  }])

  .factory('personSrv', [function() {
    var persons = [{
      'id': 0,
      'name': 'Bill Gates'
    }, {
      'id': 1,
      'name': 'Steve Jobs'
    }];
    return {
      getAllPersons: function() {
        return persons;
      }
    }
  }])
