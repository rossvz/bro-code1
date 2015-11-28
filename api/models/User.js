var mongoose = require('mongoose');

var SongSchema = new mongoose.Schema({
    name: String,
    bpm: Number
});


module.exports = mongoose.model('Song', SongSchema);
