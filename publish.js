#!/usr/bin/env node
let ghpages = require('gh-pages');
ghpages.publish('build', function(e) {
	console.log(e);
});
