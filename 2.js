/*jslint node:true */

var fs = require('fs');

//console.log(process.argv);

fs.createReadStream(process.argv[2]).pipe(process.stdout);
