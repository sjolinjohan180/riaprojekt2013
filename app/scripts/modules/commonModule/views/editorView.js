// Class: EditorView
// Usage: Extend this class to get a form and functionality for editing or creating a post
// Dependencies:
//	Backbone
//	App
define(['backbone', 'app'], function (Backbone, app) {
	'use strict';

	var EditorView = Backbone.View.extend({

		template: 'post/postcreate',

		events: {
			"click #submit-post": "submit",
			"click .format-link": "formatSelection",
			"keydown #prop-content": "contentKeyPress",
			"click .close-popover": "closePopover",
			"click .delete-post": "deletePost"
		},
		//Deletes self.model and redirects to root url
		deletePost: function () {
			var self = this;
			self.model.destroy();
			self.navigateTo('/');
		},
		//Sets the attributes on this.model to values of textboxes in form and sends the post to savePost function
		submit: function () {
			var postTitle = this.$('#prop-title').val(),
				self = this;

			this.model.set('title', postTitle);
			this.model.set('content', this.$('#prop-content').html());
			this.model.set('author', this.$('#prop-author').val());
			this.model.set('sticky', this.$('#prop-sticky').val());
			this.savePost(this.model);
		},
		// Function to call if model contains errors
		inValid: function (errors) {
			var element,
				self = this;
			_.each(errors, function (error) {
				element = self.$("#prop-"+error.name);
				element.addClass('error');
				element.next('span').html(error.feedBack);
			});
		},
		//Creates a model and checks it for errors, calls invalid or navigates to root url
		savePost: function (model) {
			var self = this;
			this.collection.create(model);
			if (model.validationError) {
				self.inValid(model.errors);
			} else {
				self.navigateTo('/');
			}
		},
		//Use this to navigate, takes a url as parameter
		navigateTo: function (url) {
			if (!window.mocha) {
				app.router.navigate(url, {
					replace:true,
					trigger:true
				});
			}
		},
		//Uses execCommand to format the selection to chosen format style
		formatSelection: function (e) {
			var target = $(e.target),
				selection = window.getSelection(),
				cmdID,
				showUI = false,
				value = null;
			// Because of icons
			if (e.target.tagName === "IMG") {
				target = target.parent();
			}
			if (target.attr('class').indexOf('bold-link') === 0) {
				cmdID = 'bold';
			} else if (target.attr('class').indexOf('italic-link') === 0) {
				cmdID = 'italic';
			} else if (target.attr('class').indexOf('underline-link') === 0) {
				cmdID = 'underline';
			} else if (target.attr('class').indexOf('create-link-link') === 0 && selection.rangeCount) {
				cmdID = 'createLink';
				value = selection.getRangeAt(0).startContainer.data;
			} else if (target.attr('class').indexOf('hr-link') === 0) {
				cmdID = 'insertHorizontalRule';
			} else if (target.attr('class').indexOf('justify-link') === 0) {
				cmdID = 'justifyFull';
			} else if (target.attr('class').indexOf('left-link') === 0) {
				cmdID = 'justifyLeft';
			} else if (target.attr('class').indexOf('center-link') === 0) {
				cmdID = 'justifyCenter';
			} else if (target.attr('class').indexOf('right-link') === 0) {
				cmdID = 'justifyRight';
			}
			document.execCommand(cmdID, showUI, value);
			target.focus();
			return false;
		},
		//Function called after view is rendered, put events here
		//Binds drag events to prop-content div, makes it possible to drag n drop images into it
		afterRender: function () {
			var that = this;
			$.event.props.push('dataTransfer');
			var div = that.$('#prop-content');

			div.popover({ placement: 'right', trigger: 'manual', html: true });
			div.popover('show');

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
					that.$("#only-image-modal").modal();
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
		},
		//Closes the popover which is present on render
		closePopover: function (e) {
			this.$("#prop-content").popover("hide");
			e.preventDefault();
			return false;
		},
		//Checks if cmd/ctrl+s was pressed, saves the post model if it was
		contentKeyPress: function (e) {
			if (e.which === 115 && e.ctrlKey  || e.which === 83 && e.metaKey) {
				e.preventDefault();
				this.submit();
				return false;
			}
		}

	});

	return EditorView;

});