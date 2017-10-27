(function() {
 var app = angular.module('getData', []);

 app.controller('dataController', function($scope,$http){
   // json dataset from opendata.dk
   var url = "https://portal.opendata.dk/dataset/730994e2-de08-46c6-bd1a-54084c53cd28/resource/4b4ce643-abe9-4968-932a-f71572e5d150/download/bycykelparkering.json";

   $http.get(url).success( function(response) {
      $scope.dataset = response.features;

   });
 });
})();