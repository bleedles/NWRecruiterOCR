(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController); 
    
    HomeController.$inject = ['$scope', 'boxDataService', '$sce'];

    function HomeController($scope, boxDataService, $sce) {
      var vm = this;
      $scope.qualifiedApplicants = [];

      $scope.search = function() {

        boxDataService.postKeywords($scope.tags).then(function(response) {
          var files = response.data.files;
          for(var f in files) {
            files[f].trustedUrl = $sce.trustAsResourceUrl(files[f].expiring_embed_link.url);
          }
          $scope.files = files;
        },
        function (response) {
          // fail 
          console.error(response);
        });
      }
    }
}());
