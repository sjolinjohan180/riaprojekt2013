//Project Model
define(['backbone', 'underscore', 'project'], function(Backbone, _, Project){
	return Backbone.Collection.extend({
		model: Project
	});
});

