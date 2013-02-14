//PostView kicks ass!
define(
[
	'backbone',
	'postView',
	'underscore',
	'plugins/backbone.layoutmanager'
],
function (Backbone, PostView, _) {

	var PostListView = Backbone.View.extend({
		template: "post/postlist",

		initialize: function () {
			Backbone.on('fetch', this.collection, this.render());
			this.render();
		},
		beforeRender: function () {
			this.collection.models = _.filter(this.collection.models, function (post) {
				return post.get('sticky') === 'on';
			});
			this.collection.forEach(function (post) {
				if(post){
					this.insertView('#row', new PostView({
						model: post
					}));
				}
			}, this);
		}
	});

	return PostListView;
});