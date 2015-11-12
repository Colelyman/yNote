angular.module('yNoteApp', [])
.controller('yNoteCtrl', [
  '$scope', '$http', '$window',
  function($scope, $http, $window){

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


    $scope.delete = function(noteid) {
        alert(nodeid);
        $http.delete('/api/notes/' + roleid + '/remove').success(function (data, status) {
            console.log(data);
        });
    }

    //bring up popup with form to create new note
    $scope.createNew = function() {
        editing = -1;
        $('.modal-title').text('Create New Note');
        $scope.showModal = true;
    };

    //submit note into database
    $scope.submitNote = function() {
        var note = {username:$scope.data.username,title:$scope.data.noteTitle,body:$scope.data.noteBody,tags:$scope.data.noteTags.split(',')};
        $scope.showModal = false;
	return $http.post('/api/notes', note).success(function(data){
            $scope.getAll();
            $scope.data.noteTitle = '';
            $scope.data.noteBody = '';
            $scope.data.noteTags = '';

        });
    };

    $scope.register = function(user) {
      console.log("In $scope.register");
      $http.post('/register', user)
      .then(function(data) {
        $scope.registerAlert = { type : 'alert alert-success', msg : 'You are successfully registered! Welcome to the club', show : true};
        setTimeout(function() {
          $window.location.href = '/';
        }, 1000);
      },
      function(err) {
        console.log("This is the error " + JSON.stringify(err));
        $scope.registerAlert = { type : 'alert alert-danger', msg : 'There was a problem registering, try a different username.', show : true};
      });
    };

    $scope.login = function(user) {
      $http.post('/login', user)
      .then(function(data) {
        console.log("You have been logged in, " + user.username);
        $scope.loginAlert = { type : 'alert alert-success', msg : 'You are successfully logged in!', show : true};
        setTimeout(function() {
          $window.location.href = '/';
        }, 1000);
      },
      function(err) {
        console.log("This is the error " + JSON.stringify(err));
        $scope.loginAlert = { type : 'alert alert-danger', msg : 'There was a problem loggin in, try again', show : true};
      });
    }


    //angular.element(document).ready($scope.getAll());

  }
])
.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
