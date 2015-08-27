var mongoose = require('mongoose');
//var db = mongoose.connect('mongodb://cyc:1@localhost/mydb');
mongoose.connect('mongodb://cyc:1@cycok.com/mydb');
//var fs = require('fs');

//var data = fs.readFileSync('mark/a.mark','utf-8');

var Schema = mongoose.Schema;



var UserSchema = new Schema({
        _id: Number,
        name: String,
        head: String,
        des: String
});


var BlogSchema = new Schema({
        _id: Number,
        title: String,
        content: String,
        time: {type:String, default: Date.now()},
        auth: {type:Number, ref:'user'}
});


var User = mongoose.model('user', UserSchema);
var Blog = mongoose.model('blog', BlogSchema);

//
//Blog.findOne({'title':'Express'}).populate('auth').exec(function(err, data){
//    console.log(data);
//});


module.exports.Blog = Blog;
module.exports.User = User;
