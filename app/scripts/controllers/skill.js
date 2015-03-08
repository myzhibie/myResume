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
    .directive('myZoom',function(){
        return function(scope,element,attr){

            element.on('mouseover',function(){
                myAnimate(element[0],{
                    'width':300,
                    'height':300,
                    'left':-25,
                    'top':-25
                },500);
            }).on('mouseout',function(){
                myAnimate(element[0],{
                    'width':250,
                    'height':250,
                    'left':0,
                    'top':0
                },500);
            })


        }
    });
