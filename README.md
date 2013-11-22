psResponsive
============

Service to help determine screen size for responsive AngularJS web apps


Download and add ps-responsive.js
Add to your app

    var app = angular.module('plunker', ['psResponsive']);

Use in controller by loading 'psResponsive' as you would any other service

    app.controller('appCtrl',
    	['psResponsive', function(psResponsive){
    		if(psResponsive('Large')){
    			... 
    		}
    	}])

Use it app wide in your HTML and $scope by attaching it to root scope

    app.run(['$rootScope', 'psResponsive', function($rootScope, psResponsive){
        $rootScope.r = psResponsive;
    }]);
    // remember to be carefull about $rootScope
    <div ng-show="r('> small')">Show on screens larger than small</div>
    <div ng-show="r('< 500')">Show on screens less than 500px</div>
    <div ng-show="r('medium')">Show on medium screens only</div>
    
    
DEMO
<a href="http://plnkr.co/edit/yoQAbpFiCUzHQFruRyA8?p=preview">http://plnkr.co/edit/yoQAbpFiCUzHQFruRyA8?p=preview</a>
