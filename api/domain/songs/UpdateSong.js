"use strict";
var Command = require("../../core/command.js");
var ApplicationError = require('../../core/error.js');
var Song = require('../../models/Song.js');


class GetSong extends Command {
    constructor() {
        super();
    }

    execute(options) {
        return new Promise((resolve, reject)=> {

        })

    }
}

module.exports = GetSong;