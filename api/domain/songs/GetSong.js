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
            if (options.name || options.bpm) {
                Song.find({$or: [{name: options.name}, {bpm: options.bpm}]})
                    .exec(function (err, song) {
                        if (err) {
                            reject(new ApplicationError({name: 'GetSong Error', message: 'Could not retrieve song', inner: err}))
                        }
                        if (song.length > 0) {
                            resolve(song)
                        } else {
                            resolve('No songs match your query')
                        }
                    })
            } else {
                Song.find({}, function (err, allSongs) {
                    if (err) {
                        reject(new ApplicationError({name: 'GetSong Error', message: 'Could not retrieve song', inner: err}))
                    }
                    resolve(allSongs)
                })
            }
        })

    }
}

module.exports = GetSong;