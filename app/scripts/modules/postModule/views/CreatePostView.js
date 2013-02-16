


//PostView kicks ass!
define(['backbone', 'postModel', 'app'], function (Backbone, PostModel, app) {
	'use strict';

	var PostListView = Backbone.View.extend({
		template: "post/postcreate",

		initialize: function () {
			this.post = new PostModel();
		},

		events: {
			"click #submit-post": "submit",
			"click .format-link": "formatSelection"

		},

		formatSelection: function (e) {
			var target = $(e.target),
				selection = window.getSelection();
			// Because of icons
			if (e.target.tagName === "IMG") {
				target = target.parent();
			}
			if (target.attr('class').indexOf('bold-link') === 0) {
				document.execCommand('bold', false, null);
			} else if (target.attr('class').indexOf('italic-link') === 0) {
				document.execCommand('italic', false, null);
			} else if (target.attr('class').indexOf('underline-link') === 0) {
				document.execCommand('underline', false, null);
			} else if (target.attr('class').indexOf('create-link-link') === 0 && selection.rangeCount) {
				document.execCommand('createLink', false, selection.getRangeAt(0).startContainer.data);
			} else if (target.attr('class').indexOf('hr-link') === 0) {
				document.execCommand('insertHorizontalRule', false, null);
			} else if (target.attr('class').indexOf('justify-link') === 0) {
				document.execCommand('justifyFull', false, null);
			} else if (target.attr('class').indexOf('left-link') === 0) {
				document.execCommand('justifyLeft', false, null);
			} else if (target.attr('class').indexOf('center-link') === 0) {
				document.execCommand('justifyCenter', false, null);
			} else if (target.attr('class').indexOf('right-link') === 0) {
				document.execCommand('justifyRight', false, null);
			}
			return false;
		},

		submit: function () {
			var imageAsDataUrl,
				imgTags,
				imgCanvas = document.createElement('canvas'),
				imgContext = imgCanvas.getContext('2d'),
				postTitle = this.$('#prop-title'),
				imagesToStore = [],
				i;

			postTitle = postTitle.find('script').remove();
			console.log(postTitle);

			imgTags = document.getElementsByClassName("uploadedImage");
			for(i = 0; i < imgTags.length; ++i){
				imgContext.drawImage(imgTags[i], 0, 0);
				imageAsDataUrl = imgCanvas.toDataURL("image/png");
				imagesToStore.push(imageAsDataUrl);
			};

			localStorage.setItem(postTitle.val()+"-images",JSON.stringify(imagesToStore));

			this.post.set('title', postTitle);
			this.post.set('content', this.$('#prop-content').html());
			this.post.set('author', this.$('#prop-author').val());
			this.post.set('sticky', this.$('#prop-sticky').val());
			this.collection.create(this.post);

			app.router.navigate(window.location.pathname, {
				replace:true,
				trigger:true
			});
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
				div.attr('class',"");
				e.preventDefault();
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
			});
		}
	});

	return PostListView;
});