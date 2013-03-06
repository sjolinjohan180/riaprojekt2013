// Class: PostListView
// Usage: To display a collection of sticky posts as a list.
//	new PostListView({model: new PostModel(), collection: CommentCollection)
// Dependencies:
//	Backbone
//	PostView
define(
[
	'backbone',
	'postView'
],
function (Backbone, PostView) {
	'use strict';

	var PostListView = Backbone.View.extend({
		template: "post/postlist",

		// Loops the posts and creaets a PostView for each item.
		beforeRender: function () {
			this.collection.forEach(function (post) {
				if(post){
					this.insertView('#row', new PostView({
						model: post
					}));
				}
			}, this);
		},

		serialize: function () {
			return {
				count: this.collection.models.length
			};
		}
	});

	return PostListView;
});