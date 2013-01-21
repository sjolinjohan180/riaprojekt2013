//Project Model
define(['backbone', 'relational','handlebars', 'task'], function(Backbone, Relational, Handlebars, Task){
	var App = App || {};
	App.Models = App.Models || {};

	App.Models.Project = Backbone.Model.extend({

		// Initialize the Model
		initialize: function(){
			console.log(Relational);
		},

		// Validate when created or updated
		validate: function(attrs) {
			if ( attrs.p_name === '' ) {
				return 'A name is required!';
			}

			if ( attrs.p_description === '' ) {
				return 'A description is required!';
			}
		}
	});

	return App;
});

