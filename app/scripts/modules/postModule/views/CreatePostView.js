


//PostView kicks ass!
define(['backbone', 'postModel', 'jquery'], function (Backbone, PostModel, $) {

	var PostListView = Backbone.View.extend({
		template: "post/postcreate",

		initialize: function () {
			this.post = new PostModel();
			this.render();
		},
		events: {
			"click #submit-post":"submit"
		},
		submit: function () {
			var imageAsDataUrl,
				imgTags,
				imgCanvas = document.createElement('canvas'),
				imgContext = imgCanvas.getContext('2d'),
				postTitle = this.$('#prop-title').val(),
				imagesToStore = [];

			imgTags = document.getElementsByClassName("uploadedImage");

			for(var i = 0; i < imgTags.length; ++i){
				imgContext.drawImage(imgTags[i], 0, 0);
				imageAsDataUrl = imgCanvas.toDataURL("image/png");
				imagesToStore.push(imageAsDataUrl);
			};

			localStorage.setItem(postTitle+"-images",JSON.stringify(imagesToStore));

			this.post.set('title', postTitle);
			this.post.set('content', this.$('#prop-content').html());
			this.post.set('author', this.$('#prop-author').val());
			this.post.set('sticky', this.$('#prop-sticky').val());
			this.collection.create(this.post);
		},
		afterRender: function () {
			$.event.props.push('dataTransfer');
			var div = this.$('#prop-content');
			div.on('dragenter', function () {
				div.attr('class',"dragenter");
			});
			div.on('dragleave', function () {
				div.attr('class',"");
			});
			div.on('drop', function (e) {
				var image = e.dataTransfer.files[0],
					reader = new FileReader();

				e.stopPropagation();

				if (!image.type.match('image.*')) {
					console.log("images only!");
				} else {
					reader.onload = function () {
						var img = $('<img>')
							.attr('title', image.name)
							.attr('src', this.result)
							.attr('class', "uploadedImage")
							.css('width', '100%')
							.appendTo('#prop-content');
					};
					reader.readAsDataURL(image);
				}
				return false;
			})
		}
	});

	return PostListView;
});