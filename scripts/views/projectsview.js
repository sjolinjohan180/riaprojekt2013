define(['backbone', 'underscore', 'handlebars', 'project'], function(Backbone, _, Handlebars, Project){

	return Backbone.View.extend({
		//Projects will render inside an ul
		tagName: 'ul',
		//With the class of project
		className: 'projects', 

		//Constructor
		initialize: function(){

		},

		//The way to fill our tag element (el) with project data
		render: function(){

		}
	});
});