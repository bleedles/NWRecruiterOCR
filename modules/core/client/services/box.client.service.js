(function () {
  'use strict';

  angular
    .module('core')
    .factory('BoxService', BoxService);

  BoxService.$inject = ['$resource', '$log', '$stateParams'];

  function BoxService($resource, $log, $stateParams) {
    var TeamRequests = $resource('/api/teamRequests/:teamRequestId', {
      teamRequestId: '@_id'
    }, {
      update: {
        method: 'PUT'
      },
      accept: {
        url: '/api/teamRequests/accept/:teamRequestToken',
        method: 'GET',
        params: {
          teamRequestToken: function() {
            return $stateParams.teamRequestToken;
          } 
        },
        hasBody: true
      },
      reject: {
        url: '/api/teamRequests/reject/:teamRequestToken',
        method: 'GET',
        params: {
          teamRequestToken: function() {
            return $stateParams.teamRequestToken;
          } 
        },
        hasBody: true
      }
    });

    angular.extend(TeamRequests.prototype, {
      createOrUpdate: function () {
        var teamRequest = this;
        return createOrUpdate(teamRequest);
      }
    });

    angular.extend(TeamRequests, {
      acceptRequest: function() {
        return this.accept().$promise;
      },
      rejectRequest: function() {
        return this.reject().$promise;
      }
    });

    return TeamRequests;

    function createOrUpdate(teamRequest) {
      if (teamRequest._id) {
        return teamRequest.$update(onSuccess, onError);
      } else {
        return teamRequest.$save(onSuccess, onError);
      }

      // Handle successful response
      function onSuccess(teamRequest) {
        // Any required internal processing from inside the service, goes here.
      }

      // Handle error response
      function onError(errorResponse) {
        var error = errorResponse.data;
        // Handle error internally
        handleError(error);
      }
    }

    function handleError(error) {
      // Log error
      $log.error(error);
    }
  }
}());
