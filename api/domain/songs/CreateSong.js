"use strict";
var Command = require("../../core/command.js");
var ApplicationError = require('../../core/error.js');


class CreateSong extends Command {
    constructor() {
        super();
    }

    execute(options) {
        return new Promise((resolve, reject)=> {
            var songs = [
                {
                    name: 'song1',
                    bpm: 111
                },
                {
                    name: 'song2',
                    bpm: 222
                },
                {
                    name: 'song3',
                    bpm: 333
                },
                {
                    name: 'song4',
                    bpm: 444
                }
            ]

            resolve(songs)

        })

    }
}

module.exports = CreateSong;