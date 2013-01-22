/*
|--------------------------------------------------------------------------
| App View
|--------------------------------------------------------------------------
*/
define(['backbone', 'underscore', 'projectsView'], function(Backbone, _, ProjectsView){

	return Backbone.View.extend({
		initialize: function() {
			//vent.on('contact:edit', this.editContact, this);
			console.log(this);
			//var addContactView = new App.Views.AddContact({ collection: App.contacts });

			var projectsView = new ProjectsView({ collection: this.collection }).render();
			$('#allProjects').append(projectsView.el);
		},

		editContact: function(contact) {
			var editContactView = new App.Views.EditContact({ model: contact });
			$('#editContact').html(editContactView.el);
		}
	});

});