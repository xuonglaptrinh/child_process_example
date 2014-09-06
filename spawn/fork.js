// This is main program

'use strict';

var cp = require('child_process');
var n = cp.fork(__dirname + '/sub.js');

n.on('message', function(m) {
    console.log('Parent recieve message: ', m);
});

n.send({Hello: 'world'});
