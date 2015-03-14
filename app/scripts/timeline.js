'use strict';

angular.module('myproApp')
    .controller('timeCtrl', ['$rootScope', '$scope', 'getTimeLineInfo', function ($rootScope, $scope, getTimeLineInfo) {
        $scope.list = getTimeLineInfo.query();
        $scope.getLunar = function (str) {
            var date = new Date(str);
            var lunar = GetLunarDateString(date);
            return lunar[0] + '\n' + lunar[1];
        };
        $scope.getYear = function (year) {
            return year.slice(1);
        };
        $scope.getMonth = function (month) {
            return month.slice(1);
        };
        $scope.yearMonthHigh = ["current","","","","","","","",""];
        $scope.getChildHigh = function (id) {

            return ($scope.yearMonthHigh[id]=='current'?"dot_child_current":"");
        };
        $scope.getParentHigh=function(id){
            return ($scope.yearMonthHigh[id]=='current'?"dot_current":"");
        }
        $scope.position=[];

    }])
    .directive('myProject',['$window', function ($window) {
        return {
            restrict: 'E',
            templateUrl: './views/timeline.html'
        }
    }])
    .directive('setPos',['getTop','$window',function(getTop,$window){
        return function(scope,element,attr){
            var obj=getTop(element[0]);
            scope.position.push(obj);
            $window.onscroll=function(){
                var top=document.body.scrollTop+100;
                scope.$apply(function() {
                    for (var j = 0; j < scope.yearMonthHigh.length; j++) {
                        scope.yearMonthHigh[j] = "";
                    }
                    for(var i=1;i<scope.position.length;i++){
                        if(top>scope.position[i-1]&&top<scope.position[i]){
                            scope.yearMonthHigh[i]='current';
                        }
                        else{
                            scope.yearMonthHigh[0]='current';
                        }
                    }
                });
            }
        }
    }]);



