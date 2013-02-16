define([
	// Application.
	"app",
	"backbone",
	"postListView",
	"postCollection",
	"createPostView",
	"postModel",
	"commentCollection"
],

	function (app, Backbone, PostListView, PostCollection, CreatePostView, PostModel, CommentCollection) {
		'use strict';

		// Defining the application router, you can attach sub routers here
		var Router = Backbone.Router.extend({
			routes: {
				"": "index",
				"admin": "admin"
			},

			index: function () {
				$(".spinner").show();
				var collection = new PostCollection(),
					cc = new CommentCollection();
				collection.fetch();
				cc.fetch();
				app.useLayout("main").setViews({
					".posts": new PostListView({model: new PostModel(), collection: collection})
				}).render();
				$(".spinner").fadeOut();
			},
			admin: function () {
				$(".spinner").show();
				var collection = new PostCollection();
				app.useLayout("admin").setViews({
					".createpost": new CreatePostView({collection : collection})
				}).render();
				$(".spinner").fadeOut();
			}
		});

		return Router;

});
