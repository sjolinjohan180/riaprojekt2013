define([
	'backbone',
	'managePostView',
	'postModel',
	'postCollection'
], function (Backbone, View, Model, Collection) {
	describe('Manage Post View', function () {

		var view,
			model,
			collection;

		beforeEach(function () {
			collection = new Collection();
			model = new Model();
			collection.create(model);
			view = new View({model: collection.at(0), collection: collection});
		});

		afterEach(function () {
			collection.each(function (post) {
				if (post) {
					post.destroy();
				}
			});
			view.remove();
		});

		it('should be initialized', function () {
			expect(view).to.not.be.empty();
		});

		it('should have a model when initialized', function () {
			expect(view.model).to.be.ok();
		});

		it('should save a model to collection when saving a model', function () {
			view.savePost(model);

			expect(view.collection).to.have.length(1);
		});

		it('should create the model passed', function () {
			model.set('title', 'Test Title');
			model.set('content', 'Test Content');
			model.set('author', 'Test Author');

			view.savePost(model);
			expect(view.collection.at(0).get('title')).to.be('Test Title');
			expect(view.collection.at(0).get('content')).to.be('Test Content');
			expect(view.collection.at(0).get('author')).to.be('Test Author');
		});

		it('should serialize a model', function () {
			expect(view.serialize().model).to.not.be.empty();
		});


	});

});