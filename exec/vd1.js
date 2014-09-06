'use strict';

var exec = require('child_process').exec;

exec('bad_command', function(err, stdout, stderr) {

    if(err !== null) {
        console.log('exec error: ' + err.message);
        console.log('stderr: ' + stderr);
    } else {
        console.log('stdout: ' + stdout);
        
    }
});
