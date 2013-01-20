// This is the documentation for AppView
// AppView
// Create module

/* Is this included? */
define(['backbone', 'underscore'], function(Backbone, _){
	var App = App || {};
	App.Views = App.Views || {};

	//Extend the backbone view
	App.Views.AppView = Backbone.View.extend({
		
		//Initialize
		initialize: function(){
			console.log('Hello Ria - Backbone world!');
		}

	});

	return App;

});