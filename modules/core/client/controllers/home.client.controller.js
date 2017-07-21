(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', ['$scope', 'boxDataService', function($scope, boxDataService)
    {

      $scope.applicants = [
        {name: "Sophia Knowles", skillset:["AngularJS", "SQL"]}, 
        {name: "Jordan Hanson", skillset:[".NET", "MongoDB"]},
        {name: "Blake Needleman", skillset:["Javascript", ".NET", "BOX"]},
        {name: "Josh Martin", skillset:["Negotiation", "HTML"]},
        {name: "Torrelle Howard", skillset:["Javascript", ".NET", "MongoDB"]}
      ];


      $scope.qualifiedApplicants = [];

      $scope.skills = ["Java", "Javascript", ".NET", "MongoDB"];
      $scope.searchSkillset = function()
      {
        boxDataService.postKeywords([$scope.searchFilter]).then(function(response)
        {
          $scope.files = response.data.files;
        },
        function (response)
        {
          // fail  
        });
        $scope.qualifiedApplicants = [];
        angular.forEach($scope.applicants, function(value, index)
        {
          if (value.skillset == $scope.chosenSkillSet)
          {
            $scope.qualifiedApplicants.push(value);
            //console.log(value.name);
          }
        })
      }
    }]);
}());
