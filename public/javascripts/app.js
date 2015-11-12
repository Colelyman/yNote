angular.module('yNoteApp', [])
.controller('yNoteCtrl', [
  '$scope', '$http',
  function($scope, $http){

    $scope.notes = [];
    $scope.showModal = false;


    //set variables for note popup
    $scope.data = [];
    $scope.data.noteTitle = '';
    $scope.data.noteBody = '';
    $scope.data.noteTags = '';
    var editing = -1;



    $scope.getAll = function() {
      return $http.get('/api/notes').success(function(data){
         angular.copy(data, $scope.notes);
      });
    };

    $scope.getOne = function(note) {
        alert(JSON.stringify(note));
    };


    $scope.createNew = function() {
        editing = -1;
        $('.modal-title').text('Create New Note');
        $scope.showModal = true;
    };

    $scope.submitNote = function() {
        var note = {title:$scope.data.noteTitle,body:$scope.data.noteBody,tags:$scope.data.noteTags.split(',')};
        $scope.showModal = false;
	return $http.post('/api/notes', note).success(function(data){
            $scope.getAll();
            $scope.data.noteTitle = '';
            $scope.data.noteBody = '';
            $scope.data.noteTags = '';

        });



    };


    //angular.element(document).ready($scope.getAll());
    






  }
]);