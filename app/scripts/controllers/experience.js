angular.module('myproApp')
    .controller('expCtrl', ['$scope','getExpInfo', function ($scope,getExpInfo) {
        $scope.animated = false;
        $scope.buttons = ['on', '', ''];
        $scope.data=getExpInfo.query();
        $scope.changeButton = function (index) {
            if(index>2){
                index=0;
            }
            else if(index<0){
                index=2;
            }
            for (var i = 0; i < $scope.buttons.length; i++) {
                $scope.buttons[i] = "";
            }
            $scope.buttons[index] = 'on';
        }
     $scope.curIndex=0;
     $scope.getItemSpan=function(index){
       return  $scope.buttons[index]=='on'?"showitem":"";
     };
     $scope.getItemImg=function(index){
         return  $scope.buttons[index]=='on'?"show":"";
     };
     $scope.getLiClass=function(index){
         return index==2?"":"bottom-none";
     }
    }])
    .directive('myExp', function () {
        return {
            restrict: 'E',
            templateUrl: '../../views/exp.html'
        }
    })
    .directive('mySlider', function () {
        return function (scope, element, attr) {
            var list=document.getElementById('sliderList');
            var listLeft=css(list,'left');
            element.on('click', function () {
                scope.$apply(function () {
                    if(scope.animated){
                        return;
                    }
                    scope.animated=true;
                    scope.changeButton(attr.index);
                    myAnimate(list,{'left':listLeft+(-1200)*attr.index},200,"",function(){
                        scope.animated=false;
                    });
                })
            });
        }
    })
    .directive('myClick',function(){
        return function(scope,element,attr){
            var list=document.getElementById('sliderList');
            var listLeft=css(list,'left');
            element.on('click', function () {
                scope.$apply(function () {
                    if(scope.animated){
                        return;
                    }
                    scope.animated=true;
                    attr.act=="left"?scope.curIndex+=1:scope.curIndex-=1;
                    myAnimate(list,{'left':listLeft+(-1200)*scope.curIndex},200,"",function(){
                        if(scope.curIndex>2){
                            scope.curIndex=0;
                            css(list,'left',-1200);
                        }
                        else if(scope.curIndex<0){
                            scope.curIndex=2;
                            css(list,'left',-3600);
                        }
                        scope.animated=false;
                    });
                    scope.changeButton(scope.curIndex);
                })
            });
        }
    });
