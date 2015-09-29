var postApp = angular.module('postApp', []);

postApp.controller('postController', function($scope, $http) {
  $scope.number = {};
  $scope.submitForm = function() {
  $http.post('http://10.1.1.18:3001/total', $scope.number).then(function(response) {
    $scope.total = response.data[0]; 
  }, function(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
  }
});
