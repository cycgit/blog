
var mongoose = require('mongoose');
var url = require('../key').mongoUrl;
mongoose.connect(url);
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    _id: Number,
    name: String,
    head: String,
    des: String
});


var typeSchema = new Schema({
    _id: Number, //1js 2mobile 3node 4server 5 tool 6 talk
    key_url:String, //url路径
    name: String,
    des: String, //描述
    update: {type: String, default: ''}, //最近更新
    update_url: {type: String, default: ''}
});


var BlogSchema = new Schema({
    _id: Number,
    title: String,
    content: String,
    time: {type:String, default: Date.now()},
    auth: {type:Number, ref:'user'},
    belong: Number
});

var User = mongoose.model('user', UserSchema);
var Blog = mongoose.model('blog', BlogSchema);
var Type = mongoose.model('type', typeSchema);



module.exports.Blog = Blog;
module.exports.User = User;
module.exports.Type = Type;

function set(Model, select, value){
    Model.update(select, {$set:value}, function(err,data){console.log(data)});
}

//Type.find().sort({_id:1}).limit(6).exec(function(err, data){
//
//    console.log(data);
//});


Blog.find({belong:1},{content:0}, function(err,data){

    console.log(data);
});




//set(Blog, {_id:4},{belong:1});
//set(Blog, {_id:5},{belong:1});
//set(Blog, {_id:6},{belong:1});


//Type.update({_id:5},{$set:{des:'前端自动化工具'}},function(){});


