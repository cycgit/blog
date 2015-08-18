var hp = require('http');


var op = {

    port: 8001,
    path: '/header',
    method: 'post'

}

var a = hp.request(op, function(res){


        res.setEncoding('utf-8');
       res.on('data', function(data){

            console.log(data);
       });
});

a.end();

