#! /usr/bin/env node

/*
 * SwotJS
 *
 * Copyright (c) 2014 Niraj Pant <nirajpant7@gmail.com>
 * Licensed under the MIT license.
 */

'use strict';
var fs = require('fs-extra')
var validator = require('validator');
var exec = require('child_process').exec;

// Get command line arguments and check validity of email
var userArgs = process.argv.slice(2);
var searchParam = userArgs[0];
var child = validator.isEmail(searchParam);

// First check if string is email
if (child) {
  // Then check if email is edu
  if(findMatches(searchParam)) {
  	console.log(searchParam + " is a valid university e-mail address.");
  } else {
  	console.log(searchParam + " is not a valid university e-mail address.");
  }  
}
else {
	if (searchParam) {
		console.log(searchParam + " is not a valid e-mail address.");
	} else {
		console.log("Please enter a search parameter after the 'swot' keyword.")
	}  
}

function findMatches(emailAddress) {
	var matches = emailAddress.match(/@+[\._a-zA-Z0-9-]+.edu/);
	if (matches) {
		return true;
	} else {
		return false;
	}
}

exports.swot = function() {
  //Todo: Implement export
};