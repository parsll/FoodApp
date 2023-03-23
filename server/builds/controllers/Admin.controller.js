"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminResetPasswordController = exports.adminLoginController = exports.adminRegisterController = void 0;
const logger_1 = __importDefault(require("../config/logger/logger"));
const Admin_service_1 = require("../services/Admin.service");
const adminRegisterController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstname, lastname, email, password } = req.body;
        const { response, statusNumber, acessToken, firstName } = yield (0, Admin_service_1.adminRegisterService)({
            firstname,
            lastname,
            email,
            password,
        });
        res.status(statusNumber).send({ response, acessToken, firstName });
    }
    catch (error) {
        logger_1.default.error(JSON.stringify(error));
        res.status(400).send(error);
    }
});
exports.adminRegisterController = adminRegisterController;
const adminLoginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const { response, statusNumber, acessToken, firstName } = yield (0, Admin_service_1.adminLoginService)({
            email,
            password,
        });
        res.status(statusNumber).json({ response, acessToken, firstName });
    }
    catch (error) {
        logger_1.default.error(JSON.stringify(error));
        res.status(400).send(error);
    }
});
exports.adminLoginController = adminLoginController;
const adminResetPasswordController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { newPassword, username } = req.body;
        const { response, statusNumber } = yield (0, Admin_service_1.adminResetPasswordService)({
            newPassword,
            username,
        });
        res.status(statusNumber).send(response);
    }
    catch (error) {
        logger_1.default.error(JSON.stringify(error));
        res.status(400).send(error);
    }
});
exports.adminResetPasswordController = adminResetPasswordController;
