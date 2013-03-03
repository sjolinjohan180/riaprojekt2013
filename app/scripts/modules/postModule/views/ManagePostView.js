// Class: ManagePostView
// Usage: Used to edit a post.
//	new ManagePostView({model: post, collection : postCollection})
// Extends EditorView to get functionality to edit a post.
// Dependencies:
//	EditorView


define(['editorView'], function (EditorView) {
	'use strict';

	var ManagePostView = EditorView.extend({

		serialize: function () {
			return {
				model: this.model.attributes
			};
		}
	});

	return ManagePostView;
});