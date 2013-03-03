// Class: PostCollection
// Usage: Stores posts in a list
// Dependencies:
//	Backbone
//	PostModel

define(['backbone', 'postModel'], function (Backbone, PostModel) {
	'use strict';

	var PostCollection = Backbone.Collection.extend({

		model: PostModel,
		//Checks if testing mode is on, if it is, save to t_PostCollection to minimize confusion
		localStorage: new Backbone.LocalStorage(window.mocha ? "t_PostCollection" : "PostCollection")

	});

	return PostCollection;
});