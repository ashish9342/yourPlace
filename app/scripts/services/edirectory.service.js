app.factory('edirectory', function($http) {
        const success = response => response.data;
        const error = response => console.dir(response);

        const getEmployee = () => $http.get('js/data/employee.json').then(success, error);

        return {
            getEmployee: getEmployee
        };
    });
