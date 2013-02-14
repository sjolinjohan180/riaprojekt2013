// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ["main"],

  paths: {
    // JavaScript folders.
    libs: "../scripts/libs",
    plugins: "../scripts/plugins",

    // Libraries.
    jquery: "../scripts/libs/jquery",
    backbone: "../scripts/libs/backbone",
  	bootstrap: "../scripts/libs/bootstrap.min",
	//Post module
  	postCollection: "../scripts/modules/postModule/collections/PostCollection",
	postModel: "../scripts/modules/postModule/models/PostModel",
	postListView: "../scripts/modules/postModule/views/PostListView",
	postView: "../scripts/modules/postModule/views/PostView",
  	createPostView: "../scripts/modules/postModule/views/CreatePostView",
  	//Comment module
  	commentModel: "../scripts/modules/commentModule/models/CommentModel",
  	commentCollection: "../scripts/modules/commentModule/collections/CommentCollection",
  	commentView: "../scripts/modules/commentModule/views/commentView",
  	commentListView: "../scripts/modules/commentModule/views/commentListView",
  	createCommentView: "../scripts/modules/commentModule/views/createCommentView"

  },

  shim: {
	"libs/lodash.underscore": {
		exports: "_"
	},
    // Backbone library depends on lodash and jQuery.
    backbone: {
		deps: ["libs/lodash.underscore", "jquery"],
		exports: "Backbone"
    },

	//Backbone.marionette depends on Backbone.
	"plugins/backbone.marionette" : {
		deps : ["backbone"],
		exports: "Backbone.Marionette"
	},

    // Backbone.LayoutManager depends on Backbone.
    "plugins/backbone.layoutmanager": {
		deps: ["backbone"],
		exports: "Backbone.layoutmanager"
	},

	"plugins/backbone.localStorage": {
		deps : ["jquery", "backbone", "libs/lodash.underscore"],
		exports : "Backbone.LocalStorage"
	},

	"plugins/backbone-relational": {
		deps: ["backbone", "libs/lodash.underscore"],
		exports: "Backbone.Relational"
	},

  	"libs/handlebars": {
		exports:"Handlebars"
  	},

  	bootstrap:  ["jquery"]
},

map: {
	// Ensure Lo-Dash is used instead of underscore.
	"*": { "underscore": "libs/lodash.underscore" }
	// Put additional maps here.
}


});
