
// Class: CreatePostView
// Usage: displays a form to create a post
// Extends EditorView, to get functionality to edit a post.
// Dependencies:
//	EditorView
//	PostModel


define(['editorView', 'postModel'], function (EditorView, PostModel) {
	'use strict';

	var CreatePostView = EditorView.extend({

		initialize: function () {
			this.model = new PostModel();
		},

		serialize: function () {
			return {
				model: this.model
			};
		}

	});

	return CreatePostView;
});