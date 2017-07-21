(function () {
  'use strict';

 angular
     .module('core')
    .factory('boxDataService', boxDataService);

    boxDataService.$inject = ['$http'];
    function boxDataService($http) {
    
        var boxFactoryData = {};

        boxFactoryData.postKeywords = function(keywords)
        {
          return  $http({
                method: 'POST',
                url: 'https://nwrecruiter.azurewebsites.net/api/files',
                data: {'keywords': keywords}
            });
        };

        return boxFactoryData;
      }
}());