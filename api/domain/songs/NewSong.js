"use strict";
var Command = require("../../core/command.js");
var ApplicationError = require('../../core/error.js');
var Song = require('../../models/Song.js');


class NewSong extends Command {
    constructor() {
        super();
    }

    execute(options) {
        return new Promise((resolve, reject)=> {
            var name = options.name;
            var bpm = options.bpm;
            var newSong = new Song({
                name: name,
                bpm: bpm
            });
            newSong.save(function (err) {
                if (err) {
                    reject(new ApplicationError({name: 'NewSong Error', message: 'Could not save to mongo', inner: err}))
                }
                resolve('New Song written to mongo')
            })
        })


    }
}

module.exports = NewSong;