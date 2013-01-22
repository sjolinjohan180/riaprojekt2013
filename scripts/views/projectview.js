define(['backbone', 'jquery', 'underscore', 'handlebars', 'project'], function(Backbone, $, _, Handlebars, Project){

	return Backbone.View.extend({
		//Projects will render them selfs as li tags
		tagName: 'li',
		//With the class of project
		className: 'project', 

		//How to render it
		template: _.template($('#projectTemplate').html()),

		//Constructor
		initialize: function(){
			//this.render();
		},

		//The way to fill our tag element (el) with project data
		render: function(){
			this.$el.html( this.template( this.model.toJSON() ) );
			return this;
		}
	});
});