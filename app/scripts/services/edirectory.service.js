'use strict';

angular
    .module('App.services')
    .factory('edirectoryService', function($http) {
        var fullData = false;
        var success = function(response) {
            return fullData ? response.data : response.data[0];
        };
        var error = function(response) {
            console.dir(response);
        };
        var getAllEmployees = function() {
            fullData = true;
            return $http.get('scripts/data/employee.json').then(success, error);
        };

        return {
            getAllEmployees: getAllEmployees
        };
    });
