define([
	// Application.
	"app",
	"postListView",
	"postCollection",
	"createPostView",
	"postModel",
	"commentCollection"
],

function(app, PostListView, PostCollection, CreatePostView, PostModel, CommentCollection) {
  // Defining the application router, you can attach sub routers here
  var Router = Backbone.Router.extend({
    routes: {
		"": "index",
		"admin": "admin"
    },

    index: function () {
		var collection = new PostCollection();
		collection.fetch();
		var cc = new CommentCollection();
		cc.fetch();
		app.useLayout("main").setViews({
			".posts": new PostListView({model: new PostModel(), collection: collection})
		}).render();
    },
  	admin: function () {
		app.useLayout("admin").setViews({
			".createpost": new CreatePostView({collection : new PostCollection()})
		}).render();
  	}
  });

  return Router;

});
