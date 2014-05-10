'use strict';

/* Services */
var angiecastServices = angular.module('angiecastServices', ['ngResource']);

// Constructor function for forecast.io factory service
var ForecastServiceCnstr = function($http){
  return {
    getData: function(scope, position){
      $http({
        method: 'GET',
        url: 'http://localhost:9001/api/forecast/'+position.coords.latitude+','+position.coords.longitude
      })
      .success(function(data, status, config, headers){
        scope.forecast = data;
      })
      .error(function(){ //handler errors here
        console.log("Could not get the weather forecast.");
      });
    }
  };
}

// List of injected dependencies. Required for minificaion to work
ForecastServiceCnstr.$inject = ['$http'];

angiecastServices.factory('Forecast', ForecastServiceCnstr);
