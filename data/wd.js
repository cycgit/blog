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
    _id: Number,
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
    auth: {type:Number, ref:'user'}
});

var User = mongoose.model('user', UserSchema);
var Blog = mongoose.model('blog', BlogSchema);
var Type = mongoose.model('type', typeSchema);



module.exports.Blog = Blog;
module.exports.User = User;
module.exports.Type = Type;

Type.update({_id:1}, {$set:{key_url: 'js'}}, function(){
    console.log(1);
})

Type.update({_id:2}, {$set:{key_url: 'mobile'}}, function(){

    console.log(2);
})
Type.update({_id:3}, {$set:{key_url: 'node'}}, function(){

    console.log(3);
})
Type.update({_id:4}, {$set:{key_url: 'server'}}, function(){

    console.log(4);
})
Type.update({_id:5}, {$set:{key_url: 'tool'}}, function(){

    console.log(5);
})
Type.update({_id:6}, {$set:{key_url: 'talk'}}, function(){

    console.log(6);
})