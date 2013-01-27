require.config({
	deps: ['app'],
	paths: {
		jquery: 'vendor/jquery/dist/jquery',
		underscore: 'vendor/underscore/underscore',
		backbone: 'vendor/backbone/backbone',
		relational: 'vendor/backbone-relational/relational',
		handlebars: 'vendor/handlebars/handlebars',
		localStorage: 'vendor/localstorage/backbone.localstorage',
		status: 'models/status',
		task: 'models/task',
		project: 'models/project',
		projectCollection: 'collections/projectcollection',
		statusCollection: 'collections/statuscollection',
		taskCollection: 'collections/taskcollection',
		projectView: 'views/projectview',
		addProjectView: 'views/addprojectview',
		editProjectView: 'views/editprojectview',
		projectsView: 'views/projectsview',
		availableStatuses: 'helpers/availablestatuses',
		appView: 'views/appview',
		router: 'router'
	},
	shim: {
		backbone: {
    		deps: ['underscore', 'jquery' ],
      		exports: 'Backbone'
    	},
    	relational: {
    		deps: ['backbone']
    	},
    	localStorage: {
    		deps: ['backbone']
    	}
	}
});