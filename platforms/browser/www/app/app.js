//initiate todo app to a variable
var toDoApp = angular.module('toDoApp', ['ngAnimate']);
// Add a controller to app for logic (setting scope to just this controller)
toDoApp.controller('toDoControl', function ($scope) {
    //initial hard wired data set
    $scope.toDos = [
        {'description': 'Wash the car',
         'dueBy': Date.now()},
        {'description': 'Get 100% on assignment', 'dueBy' : Date.now()}
    ];
    // Parse date and add to array 
    $scope.addToDo = function(){
        var formattedDate = Date.parse($scope.formDueDate);
        $scope.toDos.push({description:$scope.formToDo, dueBy:formattedDate});
        $scope.formToDo = '';
        $scope.formDueDate = '';
    };
    // Remove chosen item from array by splicing
    $scope.removeToDo = function(toDo){
        var index = $scope.toDos.indexOf(toDo);
        $scope.toDos.splice(index, 1);     
    };

});