var express = require('express');
var app = express();
var hbs = require('hbs');

app.set('view engine', 'hbs');
app.set('views', 'views');
app.engine('hbs', hbs.__express);

app.use('/static',express.static('static', {Mixed: false}));
app.get('/favicon.ico', function (req, res) {
        var data = require('fs').readFileSync('static/favicon.ico');
        res.end(data);
});


app.get(['/', '/index', '/home'], function (req, res) {

    res.render('home');
});

app.get('/json', function (req, res) {

    var data = {msg: 'get请求'};

    res.json(data);
});

app.post('/json', function(req, res){

    var data = {msg: 'post请求'};

    res.json(data);

});

app.use('/header', function (req, res) {

    res.json(req.headers);
});


app.get('/blog/:t', function(req, res){



	res.render('blog');

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
