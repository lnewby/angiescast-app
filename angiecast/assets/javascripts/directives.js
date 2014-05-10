angular.module('angiecastDirectives', [])
	.directive('weatherservices', [function () {
		return {
			restrict: 'E',
			scope: {},
			templateUrl: 'assets/templates/winter.html',
			link: function (scope, element) {
				// Get current latitude and longitude.
				// if (navigator.geolocation){
			 //    navigator.geolocation.getCurrentPosition(function(position){
			 //      //scope.forecast = Forecast.getData(scope, position);
			 //    });
			 //  }
			 //  else {
			 //    console.log("Geolocation is not supported by this browser.");
			 //  }
			}
		};
	}]);