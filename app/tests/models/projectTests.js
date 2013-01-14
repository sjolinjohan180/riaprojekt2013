require(['scripts/models/project'], function(Project) {

	describe('A Project Model', function() {
		//console.log(Project);
		beforeEach(function() {
		  this.project = new Project({
		  	p_name: 'Test Project',
		  	p_description: 'This is test project'
		  });
		});

		it('should be defined', function() {
			//Project model should be defined
			expect(Project).toBeDefined();
		});

		it("should require a name", function() {
			//Model should not accept an empty name
			var status = this.Project.set('p_name', '');
			expect(status).toBeFalsy();
		});

		it("should require a description", function() {
			//Model should not accept an empty Description
			var status = this.Project.set('p_description', '');
			expect(status).toBeFalsy();
		});
	});
});