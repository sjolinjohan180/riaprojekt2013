define(['backbone', 'project'], function(Backbone, App){
	return Backbone.Model.extend({
		validate: function(attrs) {
			if ( attrs.task_name === '' ) {
				return 'A name is required!';
			}

			if ( attrs.task_description === '' ) {
				return 'A description is required!';
			}
		}
	});
});