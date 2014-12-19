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

exports.swot = function() {
  //Todo: Implement export
};

function getNumber(string) {
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