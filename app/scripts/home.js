angular.module('myproApp')
    .controller('homeCtrl',['$scope','redirect',function($scope,redirect){

        $scope.redirect=function(name){
            redirect(name);
                 }
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
    .directive('myWelcome',['$window','$timeout',function($window,$timeout){
       return {
           restrict:'E',
           template:"<span class='welcome'>欢迎访问</span>",
           replace:true,
           link:function(scope, element, attr){
               var body=document.getElementsByTagName('body')[0];
               var leftvalue=(css(body,'width')-css(element[0],'width'))/2;
               $timeout(function(){
                   myAnimate(element[0],{'left':leftvalue,'opacity':100},3000,Tween.Bounce.easeOut);
               },1000);
           }
       }

    }])
    .directive('myWrap',['$timeout',function($timeout){
        return function(scope, element, attr){
            $timeout(function(){
                myAnimate(element[0],{'opacity':100},2000,Tween.Quad.easeOut);
            },1000);
        }
    }]);


