// Class: CreateCommentView
// Usage: Displays a form to create a comment
// new CreateCommentView({ model: post })
// Dependencies:
//	Backbone
//	CommentModel

define(['backbone', 'commentModel', 'bootstrap'], function (Backbone, CommentModel) {
	'use strict';

	var CreateCommentView = Backbone.View.extend({
		template: 'comment/createcomment',

		className: 'create-comment',

		events: {
			"keypress input": "keyPress"
		},

		initialize: function() {
			this.comment = new CommentModel();
		},
		//Checks if enter was pressed, calls saveComment if it was
		keyPress: function (e) {
			if (e.charCode === 13) {
				this.comment.set('content', this.$('input').val());
				this.comment.set('created_at', this.formatDate());
				this.saveComment();
			}
		},
		//Triggers an event on this.model (parent post) so it saves the comment to its collection
		saveComment: function () {
			this.model.trigger('add:comment', this.comment);
		},
		//Format the created_at date so it is in format: Example: May 30, 2013
		formatDate: function () {
			var dateString = "",
				monthNames = [ "January", "February", "March", "April", "May", "June",
				"July", "August", "September", "October", "November", "December" ],
				date = new Date(),
				month = date.getMonth();

			if(month < 10){
				month = "0" + month;
			}

			dateString = monthNames[parseInt(month, 10)] + " " + date.getDate() + ", "+ date.getFullYear();

			return dateString;
		},
		//Creates tooltips for comment input to help user
		afterRender: function () {
			this.$('.comment-create-input').tooltip({ placement:'top' });
		}

	});
	return CreateCommentView;
});