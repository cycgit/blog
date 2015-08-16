var fs = require('fs');

var marked = require('marked');


var str = marked(fs.readFileSync('data/a.mark','utf-8'));




module.exports = str;