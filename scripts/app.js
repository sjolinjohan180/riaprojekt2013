/*
* This is the Application bootstrap file
* It will kickstart the app and render application view with populated collections
*/
require(['appView'], function(AppView){
	new AppView.Views.AppView();
});
