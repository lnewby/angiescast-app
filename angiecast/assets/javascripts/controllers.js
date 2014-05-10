'use strict';

/* Controllers */
var angiecastControllers = angular.module('angiecastControllers', []);

/* Constructors functions for controllers */
function mainCnstr($scope, Forecast) {}

/* List of injected dependencies. Required for minification to work */
mainCnstr.$inject = ['$scope', 'Forecast'];

angiecastControllers.controller('mainController', mainCnstr);
