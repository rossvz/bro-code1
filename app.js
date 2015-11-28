#! /usr/bin/env nodevar express = require('express');
var app = express();
var bodyParser = require('body-parser');
var commandRoutes = require('./routes/commandRoutes.js');




app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
});

app.use(bodyParser.json());
var port = process.env.PORT || 7055;

app.use(commandRoutes);


app.use(express.static(path.join(__dirname, 'public/app')));
app.use(express.static(path.join(__dirname, 'public/')));

app.use('/docs', express.static('doc'));

app.listen(port);
console.log('bro code runs on port ' + port);
