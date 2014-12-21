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
	if(checkEdu(searchParam)) {
 		checkUniversity(searchParam);
  	} 
  	else {
  		console.log(searchParam + " is not a valid university e-mail address.");
  	}  
}
// check for errors
else {
	if (searchParam) {
		console.log(searchParam + " is not a valid e-mail address.");
	} else {
		console.log("Please enter a search parameter after the 'swot' keyword.");
	}  
}

// see if email has an edu parameter
function checkEdu(emailAddress) {
	var matches = emailAddress.match(/@+[\._a-zA-Z0-9-]+.edu/);
	if (matches) {
		return true;		
	} else {
		return false;
	}
}

// Check with master list of universities
function checkUniversity(emailAddress) {
	fs.readJson('./world_universities_and_domains.json', function(err, packageObj) {
		var domain = emailAddress.substring((emailAddress.indexOf("@") + 1));
		var foundEmail = false;
		for (var i = 0; i < Object.keys(packageObj).length; i++) {
			if(packageObj[i].domain == domain) {				
				foundEmail = true;
			} 			
		}

		if(foundEmail) {
			console.log(searchParam + " is a valid university e-mail address.");
		} else {
			console.log(searchParam + " is not a valid university e-mail address.");
		}
	});	
}