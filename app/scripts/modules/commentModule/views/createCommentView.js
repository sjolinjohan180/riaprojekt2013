

define(['backbone', 'commentModel', 'bootstrap'], function (Backbone, CommentModel) {
	var CreateCommentView = Backbone.View.extend({
		template: 'comment/createcomment',

		className: 'create-comment',

		events: {
			"keypress input": "keyPress"
		},

		initialize: function() {
			this.comment = new CommentModel();
		},

		keyPress: function (e) {
			if (e.charCode === 13) {
				this.comment.set('content', this.$('input').val());
				this.comment.set('created_at', this.formatDate());
				this.saveComment();
			}
		},

		saveComment: function () {
			this.model.trigger('add:comment', this.comment);
		},

		formatDate: function () {
			var dateString = "",
				monthNames = [ "January", "February", "March", "April", "May", "June",
				"July", "August", "September", "October", "November", "December" ],
				date = new Date(),
				month = date.getMonth();

			if(month < 10){
				month = "0" + month;
			}

			dateString = monthNames[parseInt(month)] + " " + date.getDate() + ", "+ date.getFullYear();

			return dateString;
		},

		afterRender: function () {
			this.$('.comment-create-input').tooltip({ placement:'top' });
		}

	});
	return CreateCommentView;
});