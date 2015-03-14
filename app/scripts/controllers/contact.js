angular.module('myproApp')
    .controller('contactCtrl',['$scope','getContactInfo',function($scope,getContactInfo){
       $scope.base=getContactInfo.query();


    }])
    .directive('myContact',function(){
        return {
            restrict:'E',
            templateUrl:'../../views/contact.html'
        }
    })
    .directive('myShake',function(){
        return function(scope, element, attr){
            element.on('mouseover',function(){
                myAnimate(element[0],{top:"-80"},200,Tween.Quad.easeInOut);
            });
            element.on('mouseout',function(){
                myAnimate(element[0],{top:"0"},200);
            })
        }
    })
