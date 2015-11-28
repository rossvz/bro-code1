var express = require("express");
var router = express.Router();


router.get('/products/:product(\\d+)?', function (req, res) {
    var cmd = CommandList['GetProduct']();
    var options = {};
    options.id = req.params.product;
    options.token = req.headers.token;
    cmd.execute(options).then(function (response) {
        res.json(response);
    }).catch(function (err) {
        res.header(400);
        res.json(err)
    })
});


module.exports = router;