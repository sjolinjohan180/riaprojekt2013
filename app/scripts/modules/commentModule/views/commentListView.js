// Class: CommentListView
// Usage: Presents comments as a list
//	new CommentListView({collection: commentCollection, model: post})
// Dependencies:
//	Backbone
//	CommentView


define(['backbone', 'commentView'], function (Backbone, CommentView) {
	'use strict';

	var CommentListView = Backbone.View.extend({

		template: "comment/commentlist",

		events: {
			"click .show-comments-link": "showHideComments",
			"click .hide-comments-link": "showHideComments"
		},
		//Loops the comments passed to this object and creates a commentView for each item
		beforeRender: function () {
			var commentView,
				that = this;

			this.collection.forEach(function (comment) {
				if(comment){
					commentView = new CommentView({model: comment});
					that.insertView('.comments', commentView);
				}
			}, that);
		},

		serialize: function () {
			var that = this;
			return {
				count: _.size(that.collection)
			};
		},
		//Toggle the visibility of the comment list
		showHideComments: function () {
			this.$('.comments').toggle("slow");
			this.$('.show-comments-link').toggle();
		}

	});

	return CommentListView;
});