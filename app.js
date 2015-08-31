var express = require('express');
var app = express();
var hbs = require('hbs');

var marked = require('marked'); //mark down
var db = require('./data/db');
var ftime = require('ftime');


marked.setOptions({
    highlight: function (code) {
        return require('highlight').Highlight(code);
    }
});

app.set('view engine', 'hbs');
app.set('views', 'views');
app.engine('hbs', hbs.__express);

app.use(['/static','/favicon.ico'],express.static('static', {Mixed: false}));

app.get(['/', '/index', '/home'], function (req, res) {
    res.render('home');
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


app.use(function(req, res){
    //console.log('未处理的路由'+ req.path);
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
