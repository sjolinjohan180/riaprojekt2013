var tests = [
	window.location.hash + 'test/spec/modules/postModule/views/CreatePostView.js',
	window.location.hash + 'test/spec//modules/postModule/views/ManagePostView.js',
	window.location.hash + 'test/spec/modules/commentModule/views/CreateCommentView.js'
];

require(tests, function () {
	mocha.run();
});