//PostView kicks ass!
define(
[
	'backbone',
	'postView'
],
function (Backbone, PostView) {

	var PostListView = Backbone.View.extend({
		template: "post/postlist",

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
		},
		serialize: function () {
			return {
				count: this.collection.models.length
			};
		}
	});

	return PostListView;
});