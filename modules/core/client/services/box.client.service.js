(function () {
  'use strict';

 angular
     .module('core')
    .factory('boxDataService', boxDataService);

    boxDataService.$inject = ['$http'];
    function boxDataService($http) {
    
        var boxFactoryData = {};

        boxFactoryData.postKeywords = function(tags)
        {
          return  $http({
                method: 'POST',
                url: '/api/files',
                data: {'tags': tags}
            });
        };

        return boxFactoryData;
      }
}());