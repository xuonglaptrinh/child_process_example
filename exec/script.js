// script.js
'use strict';

var exec = require('child_process').exec;

exec('node server.js', function(error, stdout, stderr) {
    if (error !== null) {
        console.log('exec error: ', error);
    } else {
        console.log('stdout: ', stdout);
        console.log('stderr: ', stderr);
    }
});
