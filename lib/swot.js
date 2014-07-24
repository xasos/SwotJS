#! /usr/bin/env node

/*
 * SwotJS
 *
 * Copyright (c) 2014 Niraj Pant
 * Licensed under the MIT license.
 */

'use strict';

console.log(process.argv);

var userArgs = process.argv.slice(2);
var searchParam = userArgs[0];

var exec = require('child_process').exec;
var child = exec('' + searchParam, function(err, stdout, stderr) { //add bash command
    if (err) throw err;
    console.log(stdout);
});
