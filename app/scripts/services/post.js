'use strict';

app.factory('Post', function ($resource) {
	return $resource('https://flickering-fire-8507.firebaseio.com/posts/:id.json');
});