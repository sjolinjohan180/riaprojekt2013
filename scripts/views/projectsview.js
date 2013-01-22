define(['backbone', 'underscore', 'jquery', 'handlebars', 'project', 'projectView'], function(Backbone, _, $, Handlebars, Project, ProjectView){

	return Backbone.View.extend({
		//Projects will render inside an ul
		tagName: 'ul',
		//With the class of project
		className: 'projects', 

		//Constructor
		initialize: function(){
			this.collection.on('add', this.addOne, this);
		},

		//The way to fill our tag element (el) with project data
		render: function() {
			this.collection.each( this.addOne, this );
			//return this for method chaining
			return this;
		},

		addOne: function(project) {
			var projectView = new ProjectView({ model: project });
			this.$el.append(projectView.render().el);	
		}
	});
});