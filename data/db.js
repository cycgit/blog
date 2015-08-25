var mongoose = require('mongoose');
//var db = mongoose.connect('mongodb://cyc:1@localhost/mydb');
var db = mongoose.connect('mongodb://cycok.com/mydb');

<<<<<<< HEAD

=======
>>>>>>> aacb3fc8139ab9224dca89d818d2117c6ffc9d37
var Schema = mongoose.Schema;
var blogSchema = new Schema({
    title: String,
    second_title: {type: String, default: ""},
    content: String,
    auth_id: Number,
    publish_time: {type: Date, default: Date.now},
    key_url: Number
});



var userSchema = new Schema({
    id : Number,
    name: String,
    profile: String,
    head: String
});

var Blog = db.model('blog', blogSchema);
var User = db.model('user', userSchema);

module.exports.Blog = Blog;
module.exports.User = User;
