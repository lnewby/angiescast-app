'use strict';

/* Controllers */
var angiecastControllers = angular.module('angiecastControllers', []);

/* Constructors functions for controllers */
function ForecastCnstr($scope, $http, Forecast) {
	if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      $scope.forecast = Forecast.getData($scope, position);
    });
  }
  else {
    console.log("Geolocation is not supported by this browser.");
  }
}

/* List of injected dependencies. Required for minification to work */
ForecastCnstr.$inject = ['$scope', '$http', 'Forecast'];

angiecastControllers.controller('ForecastCtrl', ForecastCnstr);
