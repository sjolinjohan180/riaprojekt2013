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

		initialize: function () {

			if (this.collection.models.length === 0) {
				Backbone.trigger('show:errorMessage', { header: "Oh snap!", text: "No posts was found." });
			}
		}
	});

	return PostListView;
});