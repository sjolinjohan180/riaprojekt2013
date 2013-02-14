

define(['backbone', 'commentModel', 'plugins/backbone.localstorage'], function (Backbone, CommentModel) {

	var CommentCollection = Backbone.Collection.extend({
		model: CommentModel,
		localStorage: new Backbone.LocalStorage("CommentCollection")
	});

	return CommentCollection;
});