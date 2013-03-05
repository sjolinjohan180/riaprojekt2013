// Class: CommentModel
// Usage: This class contains the definition and events of a comment
// Dependencies:
//	Backbone
define(['backbone'], function (Backbone) {
	'use strict';

	var CommentModel = Backbone.RelationalModel.extend({
		defaults: {
			content: 'No content',
			created_at: 'No date'
		}
	});
	return CommentModel;
});