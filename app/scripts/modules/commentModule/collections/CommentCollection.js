// Class: CommentCollection
// Usage: Stores comments in a list
// Dependencies:
//	Backbone
//	CommentModel

define(['backbone', 'commentModel'], function (Backbone, CommentModel) {
	'use strict';

	var CommentCollection = Backbone.Collection.extend({

		model: CommentModel,
		//If in test mode save to t_CommentCollection to reduce confusion
		localStorage: new Backbone.LocalStorage(window.mocha ? "t_CommentCollection" : "CommentCollection")

	});

	return CommentCollection;
});