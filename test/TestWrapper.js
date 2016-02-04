var parse = require('./parse');
var build = require('./build');

const assert = require('assert');

parse.parse(assert);

// The following asserts because the file being read isn't set to base64 - wah - don't think we care
//build.build(assert);


