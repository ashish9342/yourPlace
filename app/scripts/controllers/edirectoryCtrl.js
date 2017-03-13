'use strict';

/**
 * @ngdoc function
 * @name yourSpaceApp.controller:edirectoryCtrl
 * @description
 * # edirectoryCtrl
 * Controller of the yourSpaceApp
 */
angular.module('yourSpaceApp')
  .controller("edirectoryController", ["$scope", "employeeList", function($scope, employeeList) {
    console.log(employeeList);
    $scope.employeeList = employeeList.data;
    $scope.employee10 = [];
    $scope.heading = "Employee List";
    $scope.faClass = "fa fa-sort-desc";
    $scope.page = 1;
    $scope.contactToShow = 10;
    $scope.contactCounter = $scope.contactToShow;

    $scope.pages = Math.ceil($scope.employeeList.length / $scope.contactToShow);
    $scope.myQuery = 0;

    $scope.orderByMe = function(employee) {
      if ($scope.myQuery === 0) {
        $scope.myOrderBy = employee;
        $scope.myQuery = 1;
      } else {
        $scope.query = {};
        $scope.myQuery = 0;
      }
    };

    //initial function to update the view
    $scope.updateView = function() {
      $scope.employee10 = [];
      for (let i = 0; i < $scope.contactToShow; i++) {
        $scope.employee10.push($scope.employeeList[i]);
      }
    }; //updateView ends
    $scope.updateView();

    // next page
    $scope.nextPage = function() {
      $scope.employee10 = [];
      $scope.page++;
      for (let i = $scope.contactCounter; i < $scope.contactCounter + 10; i++) {
        $scope.employee10.push($scope.employeeList[i]);
      }
      $scope.contactCounter = $scope.contactCounter + 10;
    };

    //last page
    $scope.lastPage = function() {
      if($scope.page !== $scope.pages){
        $scope.employee10 = [];
        $scope.page = $scope.pages;
        for (let i = $scope.employeeList.length - 10 ; i < $scope.employeeList.length; i++) {
          $scope.employee10.push($scope.employeeList[i]);
        }
      }
    };

    // previous page
    $scope.previousPage = function() {
      if($scope.page > 1){
        $scope.employee10 = [];
        $scope.page--;
        console.log("Need to work here");
      }
    };

    //show fisrtPage()
    $scope.firstPage = function() {
      if($scope.page !==1){
        $scope.page = 1;
        $scope.updateView();
      }
    };


  }]);