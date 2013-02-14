

define(['backbone', 'postModel', 'plugins/backbone.localStorage'], function (Backbone, PostModel) {
	var PostCollection = Backbone.Collection.extend({
		model: PostModel,
		initialize: function () {

		},
		localStorage: new Backbone.LocalStorage("PostCollection")
	});

	return PostCollection;
});