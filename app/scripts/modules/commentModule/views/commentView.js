

define(['backbone'], function (Backbone) {
	var CommentView = Backbone.View.extend({

		template: "comment/comment",

		serialize: function () {
			return {
				model: this.model.attributes
			};
		}

	});

	return CommentView;
});