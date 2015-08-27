var mongoose = require('mongoose');
//var db = mongoose.connect('mongodb://cyc:1@localhost/mydb');
mongoose.connect('mongodb://cyc:1@cycok.com/mydb');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
        name: String,
        age: Number

});
var User = mongoose.model('user', UserSchema);

var user = new User({
    name: '小明',
    age: 2
});


//var blogSchema = new Schema({
//    title: String,
//    second_title: {type: String, default: ""},
//    content: String,
//    auth_id: Number,
//    publish_time: {type: Date, default: Date.now},
//    key_url: Number
//});
//
//
//
//var userSchema = new Schema({
//    id : Number,
//    name: String,
//    profile: String,
//    head: String
//});
//
//var Blog = db.model('blog', blogSchema);
//var User = db.model('user', userSchema);
//
//module.exports.Blog = Blog;
//module.exports.User = User;
