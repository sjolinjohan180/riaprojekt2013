define(['backbone', 'underscore', 'status'], function(Backbone, _, Status){
	return Backbone.Collection.extend({
		model: Status
	});
});

