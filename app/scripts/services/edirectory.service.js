'use strict';

angular.module('yourSpaceApp')
    .factory('edirectoryService', function($http) {
        var success = function(response) {
            return response;
        };
        var error = function(response) {
            console.dir(response);
        };
        var getAllEmployees = function() {
            return $http.get('scripts/data/employee.json').then(success, error);
        };

        return {
            getAllEmployees: getAllEmployees
        };
    });
