// Class: Router
// Usage:

define([
	// Application.
	"app",
	"backbone",
	"postListView",
	"postCollection",
	"createPostView",
	"postModel",
	"commentCollection",
	"managePostView",
	"navigationView"
],

	function (app, Backbone, PostListView, PostCollection, CreatePostView, PostModel, CommentCollection, ManagePostView, NavigationView) {
		'use strict';

		// Defining the application router, you can attach sub routers here
		var Router = Backbone.Router.extend({
			initialize: function () {

			},

			routes: {
				"": "index",
				"admin": "admin",
				"post/manage/:id": "managePost"
			},

			index: function () {
				$(".spinner").show();
				var collection = new PostCollection(),
					cc = new CommentCollection();
				collection.fetch();
				cc.fetch();

				app.useLayout("main").setViews({
					".main-nav": new NavigationView(),
					".posts": new PostListView({model: new PostModel(), collection: collection})
				}).render();
				$(".spinner").fadeOut();
			},
			admin: function () {
				$(".spinner").show();
				var collection = new PostCollection();
				app.useLayout("admin").setViews({
					".main-nav": new NavigationView(),
					".createpost": new CreatePostView({collection : collection})
				}).render();
				$(".spinner").fadeOut();
			},
			managePost: function (id) {
				$(".spinner").show();
				var collection = new PostCollection(),
					model;
				collection.fetch();
				model = collection.get(id);

				app.useLayout("admin").setViews({
					".main-nav": new NavigationView(),
					".managepost": new ManagePostView({model:model, collection : collection})
				}).render();
				$(".spinner").fadeOut();
			}
		});

		return Router;

});
