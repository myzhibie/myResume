angular.module('myproApp')
    .controller('navCtrl',['$rootScope','$scope','redirect',function($rootScope,$scope,redirect){

        $rootScope.list=[
       ["home","首页",'active'],
       ["about","关于我",''],
       ["project","项目经历",''],
       ["experience","个人经历",''],
       ["skill","个人技能",''],
       ["contact","联系我",'']
      ];
        $scope.showClass=function(name){
          redirect(name);
            angular.forEach($rootScope.list,function(val,key){
                $rootScope.list[key][2]=(val[0]==name?"active":"");
            });

        };
      $scope.showCase='hideList';
      $scope.toggleList=function(){
          $scope.showCase=='hideList'?$scope.showCase='showList':$scope.showCase='hideList';
      }
    }])
    .directive('myNav',function(){
       return {
           restrict:'E',
           templateUrl:'../../views/nav.html'
       }
    })
    .directive('stickyNav',['$window',function($window){
        return function(scope,element,attr){
            function getTop(e){
                var offset=e.offsetTop;
                if(e.offsetParent!=null) offset+=getTop(e.offsetParent);
                return offset;
            }
            //$window是angular对window对象的一个别称，是原生的
            //window对象
            var top=css(element[0],'top');
            angular.element($window).on('scroll',function(event){
                //event.preventDefault();
                var body=document.getElementsByTagName('body')[0];
                var topDis=body.scrollTop;
                topDis>=top?element.addClass('fixed'):element.removeClass('fixed');
            })
        }
    }])

