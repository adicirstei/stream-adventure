/*jslint node:true */

var through = require('through');

var tr = through(
    function (buf) {
        this.queue(buf.toString().toUpperCase());
    },
    function () {
        this.queue(null);
    }
);
//console.log(process.argv);

process.stdin.pipe(tr).pipe(process.stdout);

