var express = require('express');
var app = express();
var hbs = require('hbs');
var d = require('./tem');

app.set('view engine', 'hbs');
app.set('views', 'views');
app.engine('hbs', hbs.__express);

hbs.registerHelper('show', function(str) {
        return marked(str);
});
hbs.registerPartials('views/blog');


var fs = require('fs');

app.use('/static',express.static('static', {Mixed: false}));


app.get(['/', '/index', '/home'], function (req, res) {

    res.render('show',{title:'handlebar', blog:'blog'});
});


app.get('/blog/:t', function(req, res){

	res.render('blog',{mark: d});
});

app.use(function(req, res){
    console.log('未处理的路由'+ req.path);
    res.status(404);
    res.send('未找到你的路由');
});

app.use(function(err, req, res, next){
    console.log('检测到未处理的错误: '+ err.message);
    res.status(500);
    res.send('服务器错误');
});




app.listen(8001,function(){
    console.log('监听8001端口');
});
