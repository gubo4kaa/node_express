"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPError = void 0;
class HTTPError extends Error {
    constructor(statusCode, message, constext) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.context = constext;
    }
}
exports.HTTPError = HTTPError;
