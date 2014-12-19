#! /usr/bin/env node

/*
 * SwotJS
 *
 * Copyright (c) 2014 Niraj Pant <niraj@nirajpant.co>
 * Licensed under the MIT license.
 */

'use strict';
var validator = require('validator');
var exec = require('child_process').exec;
// var ProgressBar = require('progress');
//
// var bar = new ProgressBar(':bar', { total: 10 });
// var timer = setInterval(function () {
//   bar.tick();
//   if (bar.complete) {
//     console.log('\ncomplete\n');
//     clearInterval(timer);
//   }
// }, 100);

var req = http.request({
host: 'http://www.validmail.org/'
port: 443,
path: '?email=asdf%40google.com'
});

exports.swot = function() {
  //Todo: Implement export
};

functiong getNumber(string) {
    var matches = string.match(/-mr([0-9]+)/);
    return matches[1];
}
getNumber("something30-mr200");

console.log(process.argv);

var userArgs = process.argv.slice(2);
var searchParam = userArgs[0];

var child = validator.isEmail(searchParam);
if (child) {
  console.log(searchParam + " is a valid e-mail address.")
}
else {
  console.log(searchParam + " is not a valid e-mail address.")
}

//simple search for file
// exec('ls -a | grep ' + searchParam, function(err, stdout, stderr) { //add bash command
//     if (err) {
//       console.log("There was an error."); //throw err later
//     }
//
//     console.log(stdout);
//
// });
