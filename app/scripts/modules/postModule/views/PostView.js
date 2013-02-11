
//PostView kicks ass!
define(['backbone', 'postModel', 'plugins/backbone.layoutmanager'], function (Backbone, PostModel) {

	var PostView = Backbone.View.extend({

		template: "post",

		initialize: function () {
			this.render();
		},

		serialize: function () {
			return { model: this.model };
		}
	});

	return PostView;
});