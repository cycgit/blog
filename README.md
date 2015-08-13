# blog
## 这是耳机标题
>个人博客
```
var express = require('express');
var app = express();
app.use(function(req, res){
    res.send('hello express!');
});
app.listen(8001,function(){
    console.log('监听8001端口');
});
```
