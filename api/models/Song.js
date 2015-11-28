var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    picture: String,
    displayName: String,
    activities: Array
});


module.exports = mongoose.model('User', UserSchema);
