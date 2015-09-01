var mongoose = require('mongoose');
var url = require('../key').mongoUrl;

mongoose.connect(url);

var fs = require('fs');

var data = fs.readFileSync('./mark/React','utf-8');

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

var Blog = mongoose.model('blog', BlogSchema);

Blog.update({_id:3},{"$set":{content:data, title:'React', time:Date.now()}}, function () {
    
});
