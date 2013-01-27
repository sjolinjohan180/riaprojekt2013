define(['backbone','jquery', 'underscore', 'relational', 'project', 'task'], function(Backbone, $,  _, Relational, Project, Task){
	return Backbone.RelationalModel.extend({
		
		//Validate input before create or update a model
		validate: function(attrs) {
				if ( attrs.status_name === '' ) {
					return 'A name is required!';
				}
		}
	});
});
