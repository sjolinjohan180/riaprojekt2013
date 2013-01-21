define(['backbone', 'relational','underscore', 'status','project'], function(Backbone, Relational, _, Status, Project){
	return Backbone.RelationalModel.extend({
		defaults: {
			task_name: 'Give me a name',
			task_description: 'And a description'
		},

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