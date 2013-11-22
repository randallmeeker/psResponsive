psResponsive
============

Service to help determine screen size for responsive AngularJS web apps


Download and add ps-responsive.js
Add to your app

    var app = angular.module('plunker', ['psResponsive']);

Use in controller by loading 'psResponsive' as you would any other service

Use it app wide in your HTML and $scope by attaching it to root scope

    app.run(['$rootScope', '$psResponsive', function($rootScope, $responsive){
      $rootScope.$responsive = $psResponsive;
    }]);
