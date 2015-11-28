"use strict";
var fs = require('fs');
var recursive = require('recursive-readdir');
var q = require('q');
class CommandList {
    constructor() {
        generateCommandList(this)

    }
}

function generateCommandList(commandList) {
    var defer = q.defer();
    var commandsDirectory = './api/domain/';
    recursive(commandsDirectory, function (err, files) {
        files.forEach(function (filename) {
            if (filename !== 'api/domain/CommandList.js') {
                var r = require('../../' + filename);
                filename = filename.replace(/\.[^/.]+$/, "");
                filename = filename.split('/');
                filename = filename.pop();
                commandList[filename] = (options)=> {
                    return new r(options)
                };
            }
        });
        defer.resolve(commandList)

    });
    return defer.promise;
}

module.exports = CommandList;