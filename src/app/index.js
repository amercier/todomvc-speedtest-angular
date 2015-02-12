/*global angular */

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
angular.module('todomvcSpeedtestAngular', ['ngRoute'])
  .config(function ($routeProvider) {
    'use strict';

    var routeConfig = {
      controller: 'TodoCtrl',
      templateUrl: 'app/todo/todo.html',
      resolve: {
        store: ['localStorage', function (localStorage) {
          return localStorage;
          // Get the correct module (API or localStorage).
          // return localStorage.then(function (module) {
          //   module.get(); // Fetch the todo records in the background.
          //   return module;
          // });
        }]
      }
    };

    $routeProvider
      .when('/', routeConfig)
      .when('/:status', routeConfig)
      .otherwise({
        redirectTo: '/'
      });
  });
