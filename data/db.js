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


var BlogSchema = new Schema({
        _id: Number,
        title: String,
        content: String,
        time: {type:String, default: Date.now()},
        auth: {type:Number, ref:'user'}
});

var User = mongoose.model('user', UserSchema);
var Blog = mongoose.model('blog', BlogSchema);

module.exports.Blog = Blog;
module.exports.User = User;
