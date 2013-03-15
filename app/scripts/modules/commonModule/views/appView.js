// Class: AppView
// Usage: Holding events and other universally needed code
// Dependencies:
//	Backbone
//	App
define(['backbone'], function (Backbone) {
	'use strict';

	var EditorView = Backbone.View.extend({

		initialize: function () {
			Backbone.on('show:successMessage', this.showSuccessMessage, this);
			Backbone.on('show:errorMessage', this.showErrorMessage, this)
		},

		showErrorMessage: function (messageObject) {
			var messageHtml = this.buildMessageHtml();

			if (typeof messageObject !== "object") {
				return;
			}

			messageHtml.messageBox.attr('class', 'messageBox error');
			messageHtml.icon.attr('class', 'symbol symbol-cross');

			this.showMessage(messageHtml, messageObject);
		},

		buildMessageHtml: function () {
			return {
				messageBox: $(document.createElement('div')),
				header: $(document.createElement('h2')),
				text: $(document.createElement('p')),
				flashContainer: $(".flash-container"),
				icon: $(document.createElement('span'))
			};
		},

		showMessage: function (messageHtml, message) {
			var messageBox = messageHtml.messageBox,
				icon = messageHtml.icon,
				header = messageHtml.header.html(message.header),
				text = messageHtml.text.html(message.text),
				flashContainer = messageHtml.flashContainer;

			messageBox.append(icon);
			messageBox.append(header);
			messageBox.append(text);

			flashContainer.append(messageBox);

			setTimeout(function () {
				messageBox.fadeOut('slow', function () {
					messageBox.remove();
				});
			}, 2500);
		},

		showSuccessMessage: function (messageObject) {
			var messageHtml = this.buildMessageHtml();

			if (typeof messageObject !== "object") {
				return;
			}

			messageHtml.icon.attr('class', 'symbol symbol-check');
			messageHtml.messageBox.attr('class', 'messageBox success');


			this.showMessage(messageHtml, messageObject);
		}

	});

	return EditorView;

});