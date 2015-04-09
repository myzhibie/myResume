angular.module('myproApp')
    .controller('screenCtrl',function($scope,$timeout,$interval){

       $timeout( function(){
           $interval(function(){
               if($scope.times<100){
                   $scope.times+=1;
               }
           },30);
       },1500);

     $timeout(function(){
         $scope.screenShow=false;
         $scope.showTimer=false;
     },5000);

    })
    .directive('myWelcome',['$window','$timeout',function($window,$timeout){
        return {
            restrict:'E',
            template:"<div class='welcome-outer' ng-show='showTimer'><div class='welcome-inner'><span class='times'>{{times}}%</span></div></div>",
            replace:true,
            link:function(scope, element, attr){
                var body=document.getElementsByTagName('body')[0]||document.documentElement;
                var topvalue=(css(body,'height')-css(element[0],'height'))/2;
                //var leftvalue=(css(body,'width')-css(element[0],'width'))/2;
//                $timeout(function(){
                    myAnimate(element[0],{'top':topvalue,'opacity':100},1000,Tween.Bounce.easeOut);
//                },1000);
            }
        }

    }])
