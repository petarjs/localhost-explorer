'use strict';

/* Filters */

angular.module('lhe.filters', []).
  filter('firstLevelName', [function() {
    return function(entries, search) {
    	if(!search) {
    		return entries;
    	}
    	return _.filter(entries, function(entry){
    		if('level' in entry && entry.level == 0) {
    			return (new RegExp(search, 'i')).test(entry.name);
    		}
    		return true;
    				
    	});
    };
  }]);
