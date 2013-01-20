define(['backbone', 'underscore','task'], function(Backbone, _, Task){
	var App = App || {};
	App.Models = App.Models || {};

	App.Models.Project = Backbone.Model.extend({
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

