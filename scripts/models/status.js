define(['backbone'], function(Backbone){
	return Backbone.Model.extend({
		validate: function(attrs) {
				if ( attrs.status_name === '' ) {
					return 'A name is required!';
				}
		}
	});
});
