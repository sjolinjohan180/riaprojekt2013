

define(['backbone'], function (Backbone) {

	var CommentModel = Backbone.RelationalModel.extend({
		defaults: {
			content: 'No content',
			created_at: 'No date'
		}
	});
	return CommentModel;
});