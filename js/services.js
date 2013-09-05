'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('lhe.services', []).
factory('localStorage', function() {
		// Proverava $$hashKey, jer se angular buni kad to loadujes jer ima duplikata po kljucu
		Storage.prototype.setObject = function(key, value) {
			this.setItem(key, JSON.stringify(value, function (key, val) {
			     if (key == '$$hashKey') {
			         return undefined;
			     }
			     return val;
			}));
		};
		    
		Storage.prototype.getObject = function(key) {
		    var value = this.getItem(key);
		    return value && JSON.parse(value);
		};
		
		return {
			get : function (key) {
				return localStorage.getObject(key);
			},
			set : function(key, value) {
				localStorage.setObject(key, value);
			}
		};
	});
