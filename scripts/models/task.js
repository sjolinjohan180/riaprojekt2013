define(['backbone', 'project'], function(Backbone, App){
	var App = App || {};
	App.Models = App.Models || {};

	App.Models.Task = Backbone.Model.extend({
		validate: function(attrs) {
			if ( attrs.task_name === '' ) {
				return 'A name is required!';
			}

			if ( attrs.task_description === '' ) {
				return 'A description is required!';
			}
		}
	});

	return App;

});