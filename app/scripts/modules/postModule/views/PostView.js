

//PostView kicks ass!
define(['backbone', 'plugins/backbone.layoutmanager'], function (Backbone) {

	var PostView = Backbone.View.extend({
		template: "post",

		tagName: 'div',

		className: 'post-inline',

		initialize: function () {
			this.render();
		},
		serialize: function() {
			return { model: this.model };
		}

	});

	return PostView;
});