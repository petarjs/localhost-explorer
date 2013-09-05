'use strict';

/* Controllers */

angular.module('lhe.controllers', []).controller('BrowseCtrl', ['$scope', '$http', 'localStorage', '$rootScope', function($scope, $http, ls, $rootScope) {
	$scope.getFavs = function() {
		return ls.get('lheFavs');
	};
	
	$scope.setFavsToEntries = function() {
		_.each($scope.levels, function(lvl){
			_.each(lvl.entries, function(entry){
				if(_.contains($scope.favs, entry.path)) {
					entry.faved = true;
				}
			});
		});
	};
	
	$scope.saveFavs = function() {
		ls.set('lheFavs', $scope.favs);
	};
	
	$scope.getFirstLevel = function() {
		$http.get('includes/getFirstLevel.php')
			 .success(function(data){
			 	$scope.levels.push({entries: data});
				$scope.setFavsToEntries();
			 });
	};
	
	$scope.open = function (level, entry) {
		_.map($scope.levels[level].entries, function(el){el.selected=false;return el;});
		entry.selected = true;
		$http.get('includes/getLevel.php', {params:{parent: entry.path}})
			 .success(function(data){
			 	$scope.levels.splice(level+1);
			 	$scope.levels.push({entries: data});
				$scope.setFavsToEntries();
			 });
	};

	$scope.toggleFav = function(entry){
		if(entry.faved){ 
			entry.faved = false;
			$scope.favs = _.without($scope.favs, entry.path);
			$scope.saveFavs();
		} else {
			entry.faved = true;
			$scope.favs.push(entry.path);
			$scope.saveFavs();
		}
	};
	
	$scope.pathFaved = function(path) {
		var level = _.find($scope.levels, function(lvl) {
			return lvl.entries[0].path.replace(lvl.entries[0].name,'')===path;
		});
		return _.every(level.entries, function(el){return el.faved;});
	};
	
	$scope.togglePathFav = function(l) {
		var path = l.entries[0].path.replace(l.entries[0].name,'');
		var level = _.find($scope.levels, function(lvl) {
			return lvl.entries[0].path.replace(lvl.entries[0].name,'')===path;
		});
		if(!level) {
			return;
		}
		if(_.every(level.entries, function(el){return el.faved;})){
			_.each(level.entries, function(el){el.faved=false;$scope.favs = _.without($scope.favs, el.path);});
		} else {
			_.each(level.entries, function(el){el.faved=true;$scope.favs.push(el.path);});
		}
		$scope.saveFavs();
	};
	
	$rootScope.view = 'b';
	$scope.levels = [];
	$scope.favs = $scope.getFavs() || [];
	$scope.getFirstLevel();

}]); 