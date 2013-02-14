

//PostView kicks ass!
define(['backbone', 'createCommentView', 'commentListView', "jquery", 'plugins/backbone.layoutmanager'], function (Backbone, CreateCommentView, CommentListView, $) {

	var PostView = Backbone.View.extend({
		template: "post/post",

		tagName: 'div',

		className: 'post-inline',

		events: {
			"click .read-more-link": "toggleVisibility",
			"click .read-less-link": "toggleVisibility"
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
			var post = this.model;
			var createCommentView = new CreateCommentView({model: post});
			var comments = this.model.get('comments');
			this.insertView('.comment', createCommentView);
			this.insertView('.comment-list', new CommentListView({collection: comments, model: post}));
		},
		serialize: function() {
			return { model: this.model.attributes };
		}

	});

	return PostView;
});