//Project Model
define(['backbone', 'underscore', 'localStorage','project'], function(Backbone, _, LocalStorage, Project){
	return Backbone.Collection.extend({
		model: Project,
		localStorage: new Backbone.LocalStorage("ProjectsCollection") // Unique name within your app.
	});
});

