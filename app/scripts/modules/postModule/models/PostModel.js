

define(['backbone', 'commentModel'], function (Backbone, CommentModel) {
	var PostModel = Backbone.RelationalModel.extend({

		defaults: {
			title: "World!",
			author: "No author",
			content: "No content",
			sticky: "False"
		},
		initialize: function () {
			this.on('add:comment', this.addComment, this);
		},
		addComment: function (comment) {
			this.get('comments').add(comment);
			this.save();
		},
		relations: [{
			type: Backbone.HasMany,
			key: 'comments',
			relatedModel: CommentModel,
			reverseRelation: {
				key: 'post'
			}
		}]
	});

	_.extend(PostModel, Backbone.Events);
	return PostModel;
});