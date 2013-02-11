

define(['backbone', 'jquery'], function (Backbone, $) {
	var PostModel = Backbone.Model.extend({
		initialize: function () {
		},
		defaults: {
			name: "World!",
			author: "No author",
			content: "No content"
		},
		saveItem: function() {
			this.save();
		}
	});

	return PostModel;
});