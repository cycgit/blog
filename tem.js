var fs = require('fs');

var marked = require('marked');



marked.setOptions({
  highlight: function (code) {
  	return require('highlight').highlight(code);
    //return require('highlight').highlightAuto(code).value;
  }
});

//var express = require('express');
var str = marked(fs.readFileSync('data/a.mark','utf-8'));
console.log(str);



module.exports = str;