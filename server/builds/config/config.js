"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongourl = process.env.MONGO_URL || "";
const mongourlOnline = process.env.ONLINE_MONGO_URL || "";
const acces_token = process.env.ACCESS || "";
const config = {
    MONGO_URL: mongourlOnline,
    ACCESS: acces_token,
};
exports.default = config;
