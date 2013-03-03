// Class: CommentView
// Usage: Displays a single comment
//	new CommentView({ model: comment })
// Dependencies:
//	Backbone

define(['backbone'], function (Backbone) {
	'use strict';

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