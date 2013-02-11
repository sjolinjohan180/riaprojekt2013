define([
	// Application.
	"app",
	"postView",
	"postModel"
],

function(app, PostView, PostModel) {
  // Defining the application router, you can attach sub routers here
  var Router = Backbone.Router.extend({
    routes: {
		"": "index",
		"admin": "admin"
    },

    index: function () {
		app.useLayout("main").setViews({
			".post": new PostView({model: new PostModel()})
		}).render();
    },
  	admin: function () {
		console.log("admin");
  	}
  });

  return Router;

});
