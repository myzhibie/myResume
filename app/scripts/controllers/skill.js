angular.module('myproApp')
    .controller('skillCtrl',['$scope','getSkillInfo',function($scope,getSkillInfo){
       $scope.data=getSkillInfo.query();

    }])
    .directive('mySkill',function(){
        return {
            restrict:'E',
            templateUrl:'../../views/skill.html'
        }
    })
