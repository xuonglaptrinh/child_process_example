// this is sub.js file

'use strict';

process.on('message', function(m) {
    console.log('Child recieve message: ', m);
});

process.send({Foo : 'bar'});
