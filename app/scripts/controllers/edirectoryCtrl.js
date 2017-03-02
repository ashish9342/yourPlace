app.controller("directoryCtrl",["$scope", "edirectory", function(){
  edirectory.success(function(data){
    $scope.employees = data;
  });
}]);
