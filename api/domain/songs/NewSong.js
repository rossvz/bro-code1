"use strict";
var Command = require("../../core/command.js");
var ApplicationError = require('../../core/error.js');
var Song = require('../../models/Song.js');


class NewSong extends Command {
    constructor() {
        super();
    }

    execute(options) {
        var randomName = 'Test'

    }
}

module.exports = NewSong;