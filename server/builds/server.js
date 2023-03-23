"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importStar(require("helmet"));
const User_routes_1 = __importDefault(require("./routes/User.routes"));
const database_1 = __importDefault(require("./config/Database/database"));
const Admin_routes_1 = __importDefault(require("./routes/Admin.routes"));
const Donation_routes_1 = __importDefault(require("./routes/Donation.routes"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use((0, helmet_1.xssFilter)());
app.use((0, helmet_1.default)({ crossOriginResourcePolicy: false }));
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use(express_1.default.urlencoded({ extended: true }));
(0, database_1.default)();
//health check
app.get("/ping", (req, res) => {
    res.send("Healthy").status(200);
});
app.use((req, res, next) => {
    console.info(`Incoming-> Method: [ ${req.method}] url:[${req.url}] IP: [${req.socket.remoteAddress}]`);
    res.on("finish", () => {
        console.info(`Incoming-> Method: [ ${req.method}] url:[${req.url}] IP: [${req.socket.remoteAddress}]  status:[${res.status}]`);
    });
    next();
});
process.once("SIGUSR2", function () {
    process.kill(process.pid, "SIGUSR2");
});
process.on("SIGINT", function () {
    // this is only called on ctrl+c, not restart
    process.kill(process.pid, "SIGINT");
});
app.use("/api/v1/admin", Admin_routes_1.default);
app.use("/api/v1/user", User_routes_1.default);
app.use("/api/v1/donate", Donation_routes_1.default);
app.use(express_1.default.static("build"));
app.use("*", (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, "build", "index.html"));
});
app.use("*", (req, res) => {
    return res.send("The Page isn't available in the website");
});
app.listen(9001);
