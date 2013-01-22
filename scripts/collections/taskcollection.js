define(['backbone', 'underscore', 'task'], function(Backbone, _, Task){
	return Backbone.Collection.extend({
		model: Task
	});
});

