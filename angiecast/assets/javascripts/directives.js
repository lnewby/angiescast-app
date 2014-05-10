'use strict'

var angiecastDirectives = angular.module('angiecastDirectives', []);

function weatherServiceCnstr($http, Forecast) {
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'assets/templates/winter.html',
		link: function (scope, element, attr) {
			if (navigator.geolocation){
				navigator.geolocation.getCurrentPosition(function(position){
					scope.forecast = Forecast.getData(scope, position);

					$http({
						method: 'GET',
						url: 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+position.coords.latitude+','+position.coords.longitude+'&sensor=true'
					}).
					success(function(data) {
						scope.currentCity = data.results[0].address_components[3].long_name;
					});
				});
			}
			else {
				console.log("Geolocation is not supported by this browser.");
			}
		}
	};
}

/* List of injected dependencies. Required for minification to work */
weatherServiceCnstr.$inject = ['$http','Forecast'];

angiecastDirectives.directive('weatherservices', weatherServiceCnstr);
