'use strict';

var exec = require('child_process').exec;

var option = {
    cwd: '/home/chris/src/',
    maxBuffer: 1
};

exec('ls -la', option, function(err, stdout, stderr) {
    if(err !== null) {
        console.log('Error: ' + err);
    } else {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    }
});
