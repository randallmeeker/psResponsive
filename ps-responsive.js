angular.module('psResponsive', [])
.value('psResponsiveConfig', {
        sizes : [
		{name:'tiny', minWidth: 0},
		{name:'small', minWidth: 768},
		{name:'medium', minWidth: 992},
		{name:'large', minWidth: 1200}
	]
    })
.factory('$psResponsive', ['$window', '$filter', '$rootScope', 'psResponsiveConfig', 
            function($window, $filter, $rootScope, psResponsiveConfig){
	

	var opRegEx = /[<>]\s\w+/
	var forEach = angular.forEach,
		filter = angular.filter,
		sizes = psResponsiveConfig.sizes,
		sizes = $filter('orderBy')(sizes, '-minWidth')

	var getHeight = function(){
		return $window.innerHeight
		},

		getWidth = function(){
			return $window.innerWidth
		},

		getLabel = function(){
			var cWidth = getWidth(),
				returnVal = false;
				for(var i=0;i<sizes.length;i++){
					if(parseInt(cWidth) >= parseInt(sizes[i].minWidth)){
						return sizes[i].name
					}
				}
			},
		getWidthFromLabel = function(label){
            return $filter('filter')(sizes, {name:label})[0]["minWidth"];
		},
		
		getTest = function(test){
            var thingy = test.split(' ')[0],
                against = test.split(' ')[1];
           
            if( isNaN(against) ){
                console.log('(' + getWidth()+thingy+getWidthFromLabel(against) + ')')
                return eval('(' + getWidth()+thingy+getWidthFromLabel(against) + ')');
            } else {
                return eval('(' + getWidth()+thingy+parseInt(against) + ')');
            }
                
		}

		angular.element($window).on('resize', function(){
			$rootScope.$digest();
		})    

	return function(onwha){
		if(!onwha){
			return getLabel()
		} else if (onwha == 'width'){
			return getWidth();
		} else if (onwha == 'height'){
			return getHeight();
		} else if (opRegEx.test(onwha)){
            return getTest(onwha);
			// check if onwha has a space in it
		} else {
			return (getLabel() == onwha)
		}
		return false;
	}
}])
