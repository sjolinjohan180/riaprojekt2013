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

	var task2 = new Task({
		task_name: 'Make sure it works',
		task_description: "Make sure we can run jasmine tests with testem and require"
	});

	proj.bind( 'add:tasks', function( model, coll ) {
        // Will see a Job with attributes { person: paul, company: niceCompany } being added here
    });

    proj.get( 'tasks' ).add( { task: task1 } );

	console.log(proj.toJSON());
});
