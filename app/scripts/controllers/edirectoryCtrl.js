'use strict';

/**
 * @ngdoc function
 * @name yourSpaceApp.controller:edirectoryCtrl
 * @description
 * # edirectoryCtrl
 * Controller of the yourSpaceApp
 */
angular.module('yourSpaceApp')
  .controller("edirectoryCtrl",["$scope", "edirectoryService", function($scope, edirectoryService){
      $scope.employeeList = employeeList;
  }]);
