var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/projeto2NEM');

var userSchema = new mongoose.Schema({
    name: String,
    type: String, 
    text: String
}, {collection: 'usercollection'}
);

module.exports = { Mongoose:mongoose, userSchema}