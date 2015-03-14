'use strict';

/**
 * @ngdoc function
 * @name myproApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myproApp
 */
angular.module('myproApp')
  .controller('MainCtrl', function ($scope) {
  })
    .factory('redirect',['$rootScope','$window',function($rootScope,$window){
        return function(name){
                angular.forEach($rootScope.list,function(val,key){
                    $rootScope.list[key][2]=(val[0]==name?"active":"");
                });
            var obj=document.getElementById(name);
            var body=document.getElementsByTagName('body')[0];
            myAnimate(body,{'scrollTop':obj.offsetTop},1000,Tween.Quad.easeInOut);
        }
    }])
    .factory('getAboutMeInfo',['$resource',function($resource){
       return $resource('./data/aboutme.json',{},{
           'query':  {method:'GET', isArray:false}
       });
    }])
    .factory('getTimeLineInfo',['$resource',function($resource){
        return $resource('./data/timeline.json',{},{
            'query':{method:'GET',isArray:false}
        });

    }])
    .factory('getExpInfo',['$resource',function($resource){
        return $resource('./data/experience.json',{},{
            'query':{method:'GET',isArray:true}
        });

    }])
    .factory('getSkillInfo',['$resource',function($resource){
        return $resource('./data/skill.json',{},{
            'query':{method:'GET',isArray:false}
        });
    }])
    .factory('getContactInfo',['$resource',function($resource){
        return $resource('./data/contact.json',{},{
            'query':{method:'GET',isArray:true}
        });
    }])
    .factory('getTop',function(){
        return function(obj){
            var disY=obj.offsetTop;
            while(obj.offsetParent){
                disY+=obj.offsetParent.offsetTop;
                obj=obj.offsetParent;
            }
            return disY;
        }
    });


