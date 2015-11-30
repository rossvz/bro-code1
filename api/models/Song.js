var mongoose = require('mongoose');

var SongSchema = new mongoose.Schema({
    songId: Number,
    name: String,
    artist: String,
    album: String,
    bpm: Number,
    key: String,
    structure: Array

}, {collection: 'songs'});


module.exports = mongoose.model('Song', SongSchema);
