(function () {
  'use strict';

  angular
    .module('box.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('teams', {
        abstract: true,
        url: '/teams',
        template: '<ui-view/>'
      })
      .state('teams.list', {
        url: '',
        templateUrl: '/modules/teams/client/views/list-teams.client.view.html',
        controller: 'TeamsListController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Teams List'
        }
      })
      .state('teams.create', {
        url: '/create',
        templateUrl: '/modules/teams/client/views/form-team.client.view.html',
        controller: 'TeamsEditController',
        controllerAs: 'vm',
        resolve: {
          teamResolve: newTeam
        }
      })
      .state('teams.view', {
        url: '/:teamId',
        templateUrl: '/modules/teams/client/views/view-team.client.view.html',
        controller: 'TeamsController',
        controllerAs: 'vm',
        resolve: {
          teamResolve: getTeam
        },
        data: {
          pageTitle: '{{ teamResolve.name }}'
        }
      })
      .state('teams.edit', {
        url: '/:teamId/edit',
        templateUrl: '/modules/teams/client/views/form-team.client.view.html',
        controller: 'TeamsEditController',
        controllerAs: 'vm',
        resolve: {
          teamResolve: getTeam
        },
        data: {
          pageTitle: '{{ teamResolve.name }}'
        }
      });
  }

  getTeam.$inject = ['$stateParams', 'TeamsService'];

  function getTeam($stateParams, TeamsService) {
    return TeamsService.get({
      teamId: $stateParams.teamId
    }).$promise;
  }

  newTeam.$inject = ['TeamsService'];

  function newTeam(TeamsService) {
    return new TeamsService();
  }
}());
