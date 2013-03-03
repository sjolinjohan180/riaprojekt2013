// Class: PostModel
// Usage: This class contains the definition and events of a post
// Dependencies:
//	Backbone
//	CommentModel

define(['backbone', 'commentModel'], function (Backbone, CommentModel) {
	var PostModel = Backbone.RelationalModel.extend({

		defaults: {
			title: "No title",
			author: "No author",
			content: "No content",
			sticky: "False"
		},
		initialize: function () {
			//Trigger event when comment is created
			this.on('add:comment', this.addComment, this);
		},
		//Adds a comment to this models collection
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
		}],
		//Takes the models attributes an checks for value, pushes eventual error objects to the errors array and returns it.
		validate: function (attr) {
			var errors = [];

			if (attr.title === '') {
				errors.push({ name: 'title', feedBack: 'A title is required' });
			}
			if (attr.author === '') {
				errors.push({ name: 'author', feedBack: 'An author is required' });
			}
			if (attr.content.trim().length === 0) {
				errors.push({ name: 'content', feedBack: 'A content is required' });
			}
			this.errors = errors;
			return errors.length > 0 ? errors : false;
		}
	});

	return PostModel;
});