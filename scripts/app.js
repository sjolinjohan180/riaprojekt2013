/*
* This is the Application bootstrap file
* It will kickstart the app and render application view with populated collections
*/
require(['project', 'task', 'projectView', 'projectsView', 'projectCollection', 'availableStatuses', 'statusCollection'], 
	function(Project, Task, ProjectView, ProjectsView, ProjectCollection, AvailableStatuses, StatusCollection){
	var proj = new Project();

	var proj2 = new Project();
	var proj3 = new Project();

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

    proj.get( 'tasks' ).add( { model: task1 } );
    proj.get( 'tasks' ).add( { model: task2 } );

    console.log(proj.toJSON());

    var projectCollection = new ProjectCollection();
    projectCollection.add(proj);
    projectCollection.add(proj2);
    projectCollection.add(proj3);
	console.log(projectCollection.toJSON());

	var statuses = new StatusCollection();
	console.log(statuses);
});
