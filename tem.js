var fs = require('fs');


var str = fs.readFileSync('data/a.mark','utf-8');

module.exports = str;