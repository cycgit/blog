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
        name: String,
        des: String, //描述
        update: String //最近更新
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