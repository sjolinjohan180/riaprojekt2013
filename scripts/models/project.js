//Project Model
define(['backbone', 'relational','underscore', 'task'], function(Backbone, Relational, _, Task){
	return Backbone.RelationalModel.extend({

		//Initialize
		initialize: function(){
			
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

