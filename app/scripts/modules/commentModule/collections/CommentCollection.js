

define(['backbone', 'commentModel', 'plugins/backbone.localStorage'], function (Backbone, CommentModel) {

	var CommentCollection = Backbone.Collection.extend({
		model: CommentModel,
		localStorage: new Backbone.LocalStorage("CommentCollection")
	});

	return CommentCollection;
});