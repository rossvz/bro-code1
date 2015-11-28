"use strict";

var ApplicationError = require('./error.js');


class Command {
    constructor() {

    }

    //execute() {
    //    throw new ApplicationError("NotImplemented", "This method is not implemented");
    //}
    throwError(options) {
        console.log('creating new Application Error');
        return new ApplicationError(options);
    }

    checkSecurity(options) {
        var p = new Promise((resolve, reject)=> {
            //if(!options.token){
            //    throw new Error('No Token Found')
            //}
            security.authenticate(options).then(res=> {
                resolve(res)
            }, err=> {
                reject(err)
            })
        }, err=> {
            reject(err)
        });
        return p;
    }

}

module.exports = Command;