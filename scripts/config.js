require.config({
	deps: ['app'],
	paths: {
		'jquery': 'vendor/jquery/dist/jquery',
		'underscore': 'vendor/underscore/underscore',
		'backbone': 'vendor/backbone/backbone',
		'backbone-relational': 'vendor/backbone-relational/backbone-relational',
		'localstorage': 'vendor/localstorage/backbone.localstorage',
		'status': 'models/status',
		'task': 'models/task',
		'project': 'models/project',
		'appView': 'views/appview'
	}
});