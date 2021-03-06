var express = require('express');
var app = express();
var hbs = require('hbs');

var marked = require('marked'); //mark down
var db = require('./data/db');
var ftime = require('ftime');

var url_obj = {js:1,mobile:2,node:3,server:4,tool:5, talk:6};

marked.setOptions({
    highlight: function (code) {
        return require('highlight').Highlight(code);
    }
});

app.set('view engine', 'hbs');
app.set('views', 'views');
app.engine('hbs', hbs.__express);
hbs.registerPartials('views/part');


app.use(['/static','/favicon.ico'],express.static('static', {Mixed: false}));

app.get(['/', '/index', '/home'], function (req, res) {

    db.Type.find().sort({_id:1}).limit(6).exec(function(err, data){
        res.render('home',{data: data});
    });
});

app.get('/classify/:type', function (req, res, next) {
    var id = url_obj[req.params.type];

    if(id){

        db.Blog.find({belong:1},{content:0}, function(err,data){
            if(err){
                next();

            }
            res.render('classify',{data:data});
        });
    }else{

        next();
    }

});

app.get('/blog/:key', function(req, res, next){

    //返回文章
    db.Blog.findOne({_id:req.params.key}).populate('auth').exec(function(err, data){
        if(err){
            next();
        }

        if(!data){
            next();
            return;
        }
        data.time = ftime(data.time);
        data.content = marked(data.content);
        res.render('blog', data);
    });

});

app.get('/resume', function (req, res) {


    res.render('resume');
});


app.use(function(req, res){
    console.log('未处理的路由'+ req.path+'ip:'+req.ip);
    res.status(404);
    res.send('404－未找到');
});

app.use(function(err, req, res, next){
    console.log('检测到未处理的错误: '+ err.message);
    res.status(500);
    res.send(err);
});




app.listen(80,function(){
    console.log('监听80端口');
});
