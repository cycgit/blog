var express = require('express');
var app = express();
var hbs = require('hbs');

var marked = require('marked');
var h = require('highlight');
var db = require('./data/db');


marked.setOptions({
    highlight: function (code) {
        return h.Highlight(code);
        //return require('highlight').highlightAuto(code).value;
    }
});



app.set('view engine', 'hbs');
app.set('views', 'views');
app.engine('hbs', hbs.__express);

hbs.registerPartials('views/blog');


var fs = require('fs');

app.use(['/static','/favicon.ico/'],express.static('static', {Mixed: false}));


app.get(['/', '/index', '/home'], function (req, res) {

    res.render('home');
});



app.get('/blog/:key', function(req, res, next){


    db.Blog.findOne({key_url:req.param.key},function(err, data1){
            if(!data1.title){
                next();
                return;
            }
            db.User.findOne({id:data1.auth_id},function(err, data2){
                    var data = {};
                    data.auth = data2;
                    data.blog = data1;
                    data.blog.content = marked(data.blog.content);
                res.render('blog',data);
            });

    });


});


app.use(function(req, res){
    console.log('未处理的路由'+ req.path);
    res.status(404);
    res.send('404－未找到');
});

app.use(function(err, req, res, next){
    console.log('检测到未处理的错误: '+ err.message);
    res.status(500);
    res.send('服务器错误');
});




app.listen(8001,function(){
    console.log('监听8001端口');
});
