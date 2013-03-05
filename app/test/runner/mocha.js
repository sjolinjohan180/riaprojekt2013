var tests = [
	'/test/spec/modules/postModule/views/CreatePostView.js',
	'/test/spec//modules/postModule/views/ManagePostView.js',
	'/test/spec/modules/commentModule/views/CreateCommentView.js'
];

require(tests, function () {
	mocha.run();
});