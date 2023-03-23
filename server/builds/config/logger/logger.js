"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const winston_2 = __importDefault(require("winston"));
const logger = (0, winston_1.createLogger)({
    transports: [
        new winston_2.default.transports.File({
            level: "info",
            filename: "./log/filelog-server.log",
            format: winston_2.default.format.combine(winston_2.default.format.timestamp(), winston_2.default.format.json()),
        }),
        new winston_2.default.transports.File({
            level: "error",
            filename: "./log/filelog-error.log",
            format: winston_2.default.format.combine(winston_2.default.format.timestamp(), winston_2.default.format.json()),
        }),
    ],
});
exports.default = logger;
