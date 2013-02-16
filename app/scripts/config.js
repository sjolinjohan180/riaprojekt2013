// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ["main"],

  paths: {
    // JavaScript folders.
    libs: "../scripts/libs",
    plugins: "../scripts/plugins",

    // Libraries.
    JQ: "../scripts/libs/jquery",
  	purebackbone: "../scripts/libs/backbone-0.9.10",
  	bootstrap: "../scripts/libs/bootstrap.min",
	"bb-lm": "../scripts/plugins/backbone.layoutmanager",
  	"bb-loc": "../scripts/plugins/backbone.localStorage",
  	"bb-rel": "../scripts/plugins/backbone-relational",
	backbone: "../scripts/libs/backbone",

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
	jQ: {
	  init: function(){
		  return this.jQuery.noConflict(true);
	  }
	},

    // Backbone library depends on lodash and jQuery.
    purebackbone: {
		deps: ["underscore", "JQ"],
		exports: "Backbone"
    },

    // Backbone.LayoutManager depends on Backbone.
    "bb-lm": ["purebackbone"],
	"bb-loc": ["purebackbone", "underscore"],
	"bb-rel": ["purebackbone", "underscore"],

  	bootstrap:  ["JQ"]
},

	map: {
		// Ensure Lo-Dash is used instead of underscore.
		"*": { "underscore": "libs/lodash.underscore" }
	}
});
