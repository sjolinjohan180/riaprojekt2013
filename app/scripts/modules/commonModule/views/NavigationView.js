// Class: NavigationView
// Usage: Extend this class to get navigation functionality
// Dependencies:
//	Backbone
define(['backbone'], function (Backbone) {
	'use strict';

	var NavigationView = Backbone.View.extend({
		template: 'common/mainNavigation'
	});

	return NavigationView;

});