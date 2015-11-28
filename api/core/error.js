"use strict";
//class ApplicationError

class ApplicationError extends Error
{
    constructor(options) {
        super(); //have to call this... otherwise "this" is undefined
        //console.log('new Application error created');
        this.message = options.message || "ApplicationError";
        this.category = options.category || null;
        this.name = options.name || "ApplicationException";
        this.description = options.decription || "";
        this.inner = options.inner || null;
        this.statusCode = options.statusCode || null;
    }
}

module.exports = ApplicationError;