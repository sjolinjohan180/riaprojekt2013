

//PostView kicks ass!
define(['backbone', 'createCommentView', 'commentListView'],
	function (Backbone, CreateCommentView, CommentListView) {

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
			this.listView.trigger('comment:added');
			$('.comment-created').show().delay(5000).fadeOut();
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
			this.listView = new CommentListView({collection:this.comments, model: this.post});
			this.createCommentView = new CreateCommentView({model:this.post});

			this.insertView('.comment', this.createCommentView).render();
			this.insertView('.comment-list', this.listView);
		},
		serialize: function() {
			return { model: this.model.attributes };
		}

	});

	return PostView;
});