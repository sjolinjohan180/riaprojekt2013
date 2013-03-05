

define([
	'backbone',
	'createCommentView',
	'commentCollection',
	'postModel'
], function (Backbone, View, Collection, Model) {
	'use strict';

	var view,
		collection,
		model;

	describe('Create Comment View', function () {

		beforeEach(function () {
			collection = new Collection();
			model = new Model();
			collection.create(model);
			view = new View({model: collection.at(0)});
		});

		it('should be a comment defined after initialization', function () {
			expect(view.comment).to.be.ok();
		});


		it('should save comment to collection', function () {
			view.saveComment();

			expect(model.get('comments').at(0)).to.be.ok();
		});

	});

});