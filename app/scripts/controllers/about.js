'use strict';

/**
 * @ngdoc function
 * @name myproApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myproApp
 */
angular.module('myproApp')
  .controller('AboutCtrl', ['$scope','getAboutMeInfo','$rootScope','redirect',function ($scope,getAboutMeInfo,$rootScope,redirect) {

    $scope.base = getAboutMeInfo.query();
        $scope.showClass=function(name){
            redirect(name);
            angular.forEach($rootScope.list,function(val,key){
                $rootScope.list[key][2]=(val[0]==name?"active":"");
            });

        };

  }])
    .directive('aboutMe',function(){
        return {
            restrict:'E',
            templateUrl:'../../views/about.html'
        }
    })
