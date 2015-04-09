angular.module('myproApp')
    .controller('homeCtrl',['$scope','redirect',function($scope,redirect){

        $scope.redirect=function(name){
            redirect(name);
                 };
        $scope.show="show-home";

    }])
    .directive('myHome',function(){
        return {
            restrict:'E',
            templateUrl:'./views/home.html'
        }
    })
    .directive('myRedirect',['$rootScope','redirect',function($rootScope,redirect){
         return function(scope, element, attr) {
             element.on('click',function(event){
                 event.preventDefault();
                 redirect(attr.href.slice(1));
             })
         }
    }])
    .directive('myWrap',['$timeout',function($timeout){
        return function(scope, element, attr){
            $timeout(function(){
                myAnimate(element[0],{'opacity':100},2000,Tween.Quad.easeOut);
            },1000);
        }
    }]);


