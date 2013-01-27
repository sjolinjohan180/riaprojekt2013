/*
|--------------------------------------------------------------------------
| Application Bootstrap
| It will kickstart the app and render application view with a injected collections
|--------------------------------------------------------------------------
*/
require(['backbone', 'projectCollection', 'router', 'appView'], function(Backbone, ProjectCollection, Router, AppView){
	
    //Here is were the acctuall application starts
	new Router;
	Backbone.history.start();

	var projectCollection = new ProjectCollection();
	projectCollection.fetch().then(function(){
		//Inject the collection of Projects into our AppView
		new AppView({ collection: projectCollection });
	});
});
