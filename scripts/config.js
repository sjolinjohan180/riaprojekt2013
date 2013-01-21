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
		appView: 'views/appview'
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