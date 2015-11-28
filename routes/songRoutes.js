var express = require("express");
var router = express.Router();
var CommandListClass = require('../api/domain/CommandList.js');
var CommandList = new CommandListClass;


router.get('/songs/:songId(\\d+)?', function (req, res) {
    var cmd = CommandList['GetSong']();
    var options = {};
    options.id = req.params.song;
    cmd.execute(options).then(function (response) {
        res.json(response);
    }).catch(function (err) {
        res.header(400);
        res.json(err)
    })
});


module.exports = router;