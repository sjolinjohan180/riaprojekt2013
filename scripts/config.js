require.config({
	deps: ['app'],
	paths: {
		jquery: 'vendor/jquery/dist/jquery',
		underscore: 'vendor/underscore/underscore',
		backbone: 'vendor/backbone/backbone',
		relational: 'vendor/backbone-relational/relational',
		handlebars: 'vendor/handlebars/handlebars',
		localstorage: 'vendor/localstorage/backbone.localstorage',
		status: 'models/status',
		task: 'models/task',
		project: 'models/project',
		projectCollection: 'collections/projectcollection',
		statusCollection: 'collections/statuscollection',
		taskCollection: 'collections/taskcollection',
		projectView: 'views/projectview',
		projectsView: 'views/projectsview',
		availableStatuses: 'helpers/availablestatuses',
		appView: 'views/appview',
		router: 'router'
	},
	shim: {
		underscore: {
			exports: "_"
		},
    	backbone: {
    		deps: ['underscore', 'jquery'],
      		exports: 'Backbone'
    	},
    	relational: {
    		deps: ['backbone']
    	}
	}
});