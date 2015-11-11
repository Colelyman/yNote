angular.module('yNoteApp', [])
.controller('yNoteCtrl', [
  '$scope', '$http',
  function($scope, $http){

    $scope.notes = [
      {title:'Test Comment', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar rhoncus risus, vel ornare lacus sagittis sit amet. Duis vel sem magna. Proin pulvinar velit eleifend ligula ultrices vestibulum. Nunc posuere dolor eu mauris feugiat dignissim.'}
    ];

    $scope.test = 'Hello world!';







    }
]);