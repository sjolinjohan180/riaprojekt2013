

define(['backbone', 'jquery'], function (Backbone, $) {
	var PostModel = Backbone.Model.extend({
		initialize: function () {
		},
		defaults: {
			title: "World!",
			author: "No author",
			content: "No content",
			sticky: "False"
		},
		saveItem: function() {
			this.save();
		}
	});

	return PostModel;
});