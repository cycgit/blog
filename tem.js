var fs = require('fs');

var marked = require('marked');
var h = require('highlight');


marked.setOptions({
  highlight: function (code) {
  	return h.Highlight(code);
    //return require('highlight').highlightAuto(code).value;
  }
});

//var express = require('express');
var str = marked(fs.readFileSync('data/a.mark','utf-8'));

module.exports = str;