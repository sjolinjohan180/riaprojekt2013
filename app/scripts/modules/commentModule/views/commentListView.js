


define(['backbone', 'commentView', 'underscore', 'jquery'], function (Backbone, CommentView, _, $) {
	var CommentListView = Backbone.View.extend({
		template: "comment/commentlist",
		events: {
			"click .show-comments-link": "showComments",
			"click .hide-comments-link": "hideComments"
		},
		initialize: function () {
			_.bindAll(this, "render");

			this.model.on('change', console.log("changed"));
		},
		beforeRender: function () {
			this.collection.forEach(function (comment) {
				if(comment){
					this.insertView('.comments', new CommentView({
						model: comment
					}));
				}
			}, this);
		},
		serialize: function () {
			return {
				count: _.size(this.collection)
			}
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