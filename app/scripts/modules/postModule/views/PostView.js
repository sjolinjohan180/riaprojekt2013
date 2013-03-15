// Class: PostView
// Usage: To display a single post and add functionality to the ui
//	new PostView({model: post})
// Dependencies:
//	Backbone
//	CreateCommentView
//	CommentListView

define(['backbone', 'createCommentView', 'commentListView'],
	function (Backbone, CreateCommentView, CommentListView) {
	'use strict';

	var PostView = Backbone.View.extend({
		template: "post/post",

		tagName: 'div',

		className: 'post-inline',

		events: {
			"click .read-more-link": "toggleVisibility",
			"click .read-less-link": "toggleVisibility"
		},

		initialize: function () {
			this.post = this.model;
			this.comments = this.model.get('comments');

			this.model.on('change:comments', this.commentAdded, this);
		},

		commentAdded: function () {
			this.render();
		},

		toggleVisibility: function () {
			var rlLink = this.$(".read-less-link"),
				rmLink = this.$(".read-more-link"),
				fade = this.$(".fade-out");

			if (rlLink.is(':visible')) {
				rlLink.prev().prev().attr('class', "content-container-toggle content-container");
			} else {
				rmLink.prev().attr('class', 'content-container');
			}
			fade.toggle();
			rmLink.toggle();
			rlLink.toggle();
		},

		beforeRender: function () {
			var that = this;
			that.listView = new CommentListView({collection: that.comments, model: that.post});
			that.createCommentView = new CreateCommentView({model:that.post});

			that.insertView('.comment', that.createCommentView).render();
			that.insertView('.comment-list', that.listView);
		},

		serialize: function() {
			return { model: this.model.attributes };
		}
	});

	return PostView;
});