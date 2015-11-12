angular.module('yNoteApp', [])
.controller('yNoteCtrl', [
  '$scope', '$http',
  function($scope, $http){

    $scope.notes = [];




    $scope.getAll = function() {
      return $http.get('/api/notes').success(function(data){
         angular.copy(data, $scope.notes);
      });
    };

    angular.element(document).ready($scope.getAll());
    






  }
]);