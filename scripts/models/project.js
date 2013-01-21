//Project Model
define(['backbone', 'relational','underscore', 'status','task'], function(Backbone, Relational, _, Status, Task){
	return Backbone.RelationalModel.extend({
		defaults: {
			p_name: 'Project name',
			p_description: 'Project description'
		},

		// Validate when created or updated
		validate: function(attrs) {
			if ( attrs.p_name === '' ) {
				return 'A name is required!';
			}

			if ( attrs.p_description === '' ) {
				return 'A description is required!';
			}
		},
		relations: [{
			type: Backbone.HasMany,
			key: "tasks",
			relatedModel: Task,
			reverseRelation: {
                key: 'project'
            }
		}]
	});
});

