var express = require("express");
var router = express.Router();
var CommandListClass = require('../api/domain/CommandList.js');
var CommandList = new CommandListClass;


router.get('/songs', function (req, res) {
    var cmd = CommandList['GetSong']();
    var options = {
        name: req.query.name,
        bpm: req.query.bpm
    };
    cmd.execute(options).then(function (response) {
        res.json(response);
    }).catch(function (err) {
        res.header(400);
        res.json(err)
    })
});

router.post('/songs', function (req, res) {
    var cmd = CommandList['NewSong']();
    var options = req.body.payload;
    cmd.execute(options).then(function (response) {
        res.json(response);
    }).catch(function (err) {
        res.header(400);
        res.json(err)
    })
});


module.exports = router;