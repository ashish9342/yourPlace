'use strict';

/**
 * @ngdoc function
 * @name yourSpaceApp.controller:edirectoryCtrl
 * @description
 * # edirectoryCtrl
 * Controller of the yourSpaceApp
 */
angular.module('yourSpaceApp')
  .controller("edirectoryController",["$scope", "employeeList", function($scope, employeeList){
    //console.log(employeeList);
    $scope.employeeList = employeeList.data;
    $scope.heading = "Employee List";
    $scope.faClass ="fa fa-sort-desc";
    $scope.page = 1;
    $scope.contactToShow = 10;
    $scope.contactCounter = $scope.contactToShow;

    $scope.pages = Math.ceil($scope.employeeList.length/ $scope.contactToShow);
    $scope.myQuery = 0;
    console.log("Total Employee -> " + $scope.employeeList.length);
    console.log("Contact To Show -> " + $scope.contactToShow);
    console.log("Total Pages -> " + $scope.pages);


    $scope.orderByMe = function(employee) {
      if($scope.myQuery === 0){
        $scope.myOrderBy = employee;
        $scope.myQuery = 1;
      }
      else {
        $scope.query= {};
        $scope.myQuery = 0;
      }
    };
// next Button
    $scope.nextPage = function(){

      if($scope.employeeList !== undefined){
        $scope.page++;
        for(let i = $scope.contactCounter ; i < $scope.contactCounter + 10 ; i++){
          console.log($scope.employeeList[i]);
        }
      }else {
        //disable the next button
        console.log("disable");
      }
      $scope.contactCounter = $scope.contactCounter + 10;
    };

  }]);
