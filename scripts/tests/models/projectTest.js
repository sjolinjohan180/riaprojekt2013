// ### Project Test Suit
require(['project'], function(Project){
	describe('A Project Model test suit', function() {
				
		//Set up a model to be used by the tests
		beforeEach(function() {
		  this.project = new Project({
		  	p_name: 'Test Project',
		  	p_description: 'This is test project'
		  });
		});

		//Project model should be defined
		it('Project model should be defined', function() {
			expect(this.project).toBeDefined();
		});

		//Model should not accept an empty name
		it("Project model should be able to get project name", function() {
			var p_name = this.project.get('p_name');
			expect(p_name).toBe('Test Project');
		});

		//Model should not accept an empty name
		it("Project model should require a name", function() {
			var status = this.project.set('p_name', '');
			expect(status).toBe(false);
		});

		//Model should not accept an empty Description
		it("Project model should require a description", function() {
			var status = this.project.set('p_description', '');
			expect(status).toBeFalsy();
		});

		//Model should have a status of TO DO
		it("Project model should have TO DO status when initialized", function() {
			var status = this.project.get('status');
			var status_name = status.name;
			expect(status_name).toBe('TO DO');
		});
	});
});

