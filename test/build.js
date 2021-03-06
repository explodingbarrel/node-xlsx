'use strict';
// nodemon -w . --exec npm test

var util = require('util'),
    fs = require('fs');

var log = function() {
  var args = Array.prototype.slice.call(arguments, 0);
  return util.log(util.inspect.call(null, args.length === 1 ? args[0] : args, false, null, true));
};

var plist = require('../index');

module.exports.build = function(assert) {

  var fixture = JSON.parse(fs.readFileSync(__dirname + '/fixtures/test.json'));
  var filename = __dirname + '/fixtures/test.xlsx';
  var xlsData;

  // build file
  xlsData = plist.build({worksheets: fixture});
  assert.equal(xlsData instanceof Buffer, true);
  assert.equal(xlsData.toString('base64').substr(0, 12), fs.readFileSync(filename).toString('base64').substr(0, 12));

	// This doesn't exist in the version of assert that I'm passing-thru/injecting into parse
  //assert.done();

};
