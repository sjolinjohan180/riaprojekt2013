

define(['backbone', 'commentModel', 'commentCollection'], function (Backbone, CommentModel, CommentCollection) {
	var CreateCommentView = Backbone.View.extend({
		template: 'comment/createcomment',

		className: 'create-comment',
		events: {
			"keypress input": "keyPress"
		},
		initialize: function () {
			this.collection = new CommentCollection();
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
			var dateString = "";
			var date = new Date();
			var month = date.getMonth();
			if(month < 10){
				month = "0" + month;
			}
			dateString = date.getFullYear() + "-" + month + "-" + date.getDate();

			return dateString;
		}
	});
	return CreateCommentView;
});