"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateadmin = exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
function authenticateToken(req, res, next) {
    const authHeaders = req.headers["authorization"];
    const token = authHeaders && authHeaders.split(" ")[1];
    if (token == undefined) {
        return res.status(400).send("No token available");
    }
    try {
        const { username } = jsonwebtoken_1.default.verify(token, config_1.default.ACCESS);
        if (!username) {
            return res.status(401).send("Invalid Token");
        }
        req.body.username = username;
        next();
    }
    catch (error) {
        return res.status(406).send("Login To continue");
    }
}
exports.authenticateToken = authenticateToken;
function authenticateadmin(req, res, next) {
    const authHeaders = req.headers["authorization"];
    const token = authHeaders && authHeaders.split(" ")[1];
    if (token == null) {
        return res.status(400).send("No token available");
    }
    try {
        const { username } = jsonwebtoken_1.default.verify(token, config_1.default.ACCESS);
        if (!username) {
            return res.status(401).send("Invalid Token");
        }
        req.body.username = username;
        next();
    }
    catch (error) {
        return res.status(406).send("Login To continue");
    }
}
exports.authenticateadmin = authenticateadmin;
