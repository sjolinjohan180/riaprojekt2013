define(['backbone', 'jquery','underscore'], function(Backbone, $, _){
	return Backbone.Router.extend({
		routes: {
			'': 'index',
			'show/:id': 'show',
			':id/task/new': 'newTask'
		},

		index: function() {
			
		},

		show: function(id){

		},

		newTask: function(){

		}
	});
});