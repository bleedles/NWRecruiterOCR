(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController); 
    
    HomeController.$inject = ['$scope', 'boxDataService', '$sce', '$http'];

    function HomeController($scope, boxDataService, $sce, $http) {
      var vm = this;
      $scope.qualifiedApplicants = [];
      $scope.tags = [];
      $scope.loadTags = loadTags;
      $scope.customChip = customChip;

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

      function loadTags($query) {
        return $http.get('/api/tags/' + $query, { cache: true}).then(function(response) {
          var tags = response.data;
          return tags;
        });
      }

      function customChip($chip) {
        if($chip.text) {
          return $chip;
        } else {
          return {text: $chip, category: 'custom'};
        }
      }
    }
}());
