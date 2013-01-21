/*
* This is the Application bootstrap file
* It will kickstart the app and render application view with populated collections
*/
require(['project', 'task'], function(Project, Task){
	var proj = new Project({
		id: 1, 
		p_name: 'test',
		p_description: 'test desc'
	});

	var task1 = new Task({
		task_name: 'Set up tests',
		task_description: "Make sure we can run jasmine tests with testem and require"
	});

	var task1 = new Task({
		task_name: 'Set up tests',
		task_description: "Make sure we can run jasmine tests with testem and require"
	});

	console.log(p.toJSON());
});
