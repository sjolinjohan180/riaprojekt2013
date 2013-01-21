define(['backbone', 'relational','underscore', 'project'], function(Backbone, Relational, _, Project){
	return Backbone.RelationalModel.extend({
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