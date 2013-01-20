define(['backbone'], function(Backbone){
	var App = App || {};
	App.Models = App.Models || {};

	App.Models.Status = Backbone.Model.extend({
		validate: function(attrs) {
				if ( attrs.status_name === '' ) {
					return 'A name is required!';
				}
		}
	});

	return App;
});
