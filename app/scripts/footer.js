angular.module('myproApp')
    .controller('footerCtrl', ['$scope',function ($scope) {
        $scope.isShowTop=false;
    }])
    .directive('gotoTop',['redirect',function(redirect){
        return function(scope, element, attr) {
            element.on('click',function(event){
                event.preventDefault();
                redirect(attr.href.slice(1));
            })
        }
    }])
    .directive('myTop',['$window','redirect',function($window,redirect){

        return function(scope, element, attr){
            //console.log(scope);
//            css(element[0],'opacity',0);
//            var body=document.getElementsByTagName('body')[0];
            angular.element($window).on('scroll',function(){
                var sd = document.body.scrollTop||document.documentElement.scrollTop;
                var disY=sd+css(document.documentElement,'height')-50;
                if(typeof document.documentElement.style.maxHeight==='undefined'){
                    css(element[0],'position','absolute');
                    css(element[0],'top',disY);
                };
                //在directive中对scope中的数据操作需要放在
                //$apply中进行脏检查
                if(sd>300){
                    scope.$apply(function(){
                        scope.isShowTop=true;
                    });
                }else {
                    scope.$apply(function () {
                        scope.isShowTop = false;
                    });
                }
            });

            element.on('click',function(event){
                event.preventDefault();

                redirect(attr.href.slice(1));
            });
        }
    }]);


