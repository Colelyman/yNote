angular.module('yNoteApp', [])
.controller('yNoteCtrl', [
  '$scope', '$http',
  function($scope, $http){

    $scope.notes = [];
    $scope.showModal = false;



    $scope.getAll = function() {
      return $http.get('/api/notes').success(function(data){
         angular.copy(data, $scope.notes);
      });
    };

    $scope.getOne = function(note) {
        alert(JSON.stringify(note));
    };


    $scope.createNew = function() {
        $('.modal-title').text('Create New Note');
        $scope.showModal = true;
    };


    //angular.element(document).ready($scope.getAll());
    






  }
]);