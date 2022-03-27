"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const tslog_1 = require("tslog");
class LoggerService {
    constructor() {
        this.logger = new tslog_1.Logger({
            displayInstanceName: false,
            displayLoggerName: false,
            displayFilePath: 'hidden',
            displayFunctionName: false
        });
    }
    log(...arg) {
        this.logger.info(...arg);
    }
    error(...arg) {
        this.logger.error(...arg);
    }
    warn(...arg) {
        this.logger.warn(...arg);
    }
}
exports.LoggerService = LoggerService;
