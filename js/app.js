'use strict';

// Declare app level module which depends on filters, and services
angular.module('lhe', ['lhe.filters', 'lhe.services', 'lhe.directives', 'lhe.controllers']).config(['$routeProvider',
function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'partials/browse.html',
		controller : 'BrowseCtrl'
	});
	$routeProvider.otherwise({
		redirectTo : '/'
	});
}]);
