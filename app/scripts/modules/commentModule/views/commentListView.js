


define(['backbone', 'commentView'], function (Backbone, CommentView) {
	'use strict';

	var CommentListView = Backbone.View.extend({
		template: "comment/commentlist",
		events: {
			"click .show-comments-link": "showComments",
			"click .hide-comments-link": "hideComments"
		},
		beforeRender: function () {
			var commentView;
			this.collection.forEach(function (comment) {
				if(comment){
					commentView = new CommentView({model: comment});
					this.insertView('.comments', commentView);
				}
			}, this);
		},
		serialize: function () {
			return {
				count: _.size(this.collection)
			};
		},
		showComments: function () {
			this.$('.comments').show("slow");
			this.$('.show-comments-link').hide();
		},
		hideComments: function () {
			this.$('.comments').hide("slow");
			this.$('.show-comments-link').show();
		}

	});

	return CommentListView;
});