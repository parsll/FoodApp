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
exports.loginUsersContoller = exports.getAllUsersContoller = exports.resetPasswordController = exports.verifyFpOtpController = exports.forgotPasswordController = exports.resendOtpController = exports.verifyOtpController = exports.registerUserController = void 0;
const logger_1 = __importDefault(require("../config/logger/logger"));
const User_service_1 = require("../services/User.service");
const registerUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, firstname, lastname } = req.body;
        const response = yield (0, User_service_1.createUserService)({
            email,
            password,
            firstname,
            lastname,
        });
        if (typeof response === "string")
            return res.send(response).status(400);
        return res.status(200).send({
            message: response === null || response === void 0 ? void 0 : response.response,
        });
    }
    catch (error) {
        logger_1.default.error(JSON.stringify(error));
        if (typeof error === "string") {
            return res.status(400).send(error);
        }
        return res.status(400).send("Error while Registration");
    }
});
exports.registerUserController = registerUserController;
const verifyOtpController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, otp } = req.body;
        const response = yield (0, User_service_1.verifyOtpService)({ email, otp });
        if (typeof response === "string")
            return res.send(response).status(400);
        return res.status(200).send({
            access: response.access,
            email: response.email,
            firstName: response.firstName,
        });
    }
    catch (error) {
        logger_1.default.error(JSON.stringify(error));
        if (typeof error === "string") {
            return res.status(400).send(error);
        }
        return res.status(400).send("Error while Verifying otp");
    }
});
exports.verifyOtpController = verifyOtpController;
const resendOtpController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const response = yield (0, User_service_1.resendOtpService)({ email });
        if (typeof response === "string")
            return res.send(response).status(400);
        return res.status(200).send({
            message: response.response,
        });
    }
    catch (error) {
        logger_1.default.error(JSON.stringify(error));
        if (typeof error === "string") {
            return res.status(400).send(error);
        }
        return res.status(400).send("Error while resending otp");
    }
});
exports.resendOtpController = resendOtpController;
const forgotPasswordController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const response = yield (0, User_service_1.forgotPasswordService)({ email });
        console.log(typeof response);
        if (typeof response === "string")
            return res.status(400).send(response);
        return res.status(200).send({
            message: response.response,
        });
    }
    catch (error) {
        logger_1.default.error(JSON.stringify(error));
        if (typeof error === "string") {
            return res.status(400).send(error);
        }
        return res.status(400).send("Error while resending otp");
    }
});
exports.forgotPasswordController = forgotPasswordController;
const verifyFpOtpController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, otp } = req.body;
        const response = yield (0, User_service_1.verifyFpOtpService)({ email, otp });
        if (typeof response === "string")
            return res.status(400).send(response);
        return res.status(200).send({
            message: response.response,
        });
    }
    catch (error) {
        logger_1.default.error(JSON.stringify(error));
        if (typeof error === "string") {
            return res.status(400).send(error);
        }
        return res.status(400).send("Error while resending otp");
    }
});
exports.verifyFpOtpController = verifyFpOtpController;
const resetPasswordController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, newPassword } = req.body;
        const response = yield (0, User_service_1.resetPassswordService)({ email, newPassword });
        if (typeof response === "string")
            return res.send(response).status(400);
        return res.status(200).send({
            message: response.response,
        });
    }
    catch (error) {
        logger_1.default.error(JSON.stringify(error));
        if (typeof error === "string") {
            return res.status(400).send(error);
        }
        return res.status(400).send("Error while resending otp");
    }
});
exports.resetPasswordController = resetPasswordController;
const getAllUsersContoller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, User_service_1.getAllUserService)();
        res.status(200).send(response);
    }
    catch (error) {
        logger_1.default.error(JSON.stringify(error));
        res.status(400).send("Error");
    }
});
exports.getAllUsersContoller = getAllUsersContoller;
const loginUsersContoller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const response = yield (0, User_service_1.loginUserService)({ email, password });
        if (typeof response === "string")
            throw response;
        res.status(200).send({
            access: response.access,
            email: response.email,
            firstName: response.firstName,
        });
    }
    catch (error) {
        logger_1.default.error(JSON.stringify(error));
        res.status(400).send(error);
    }
});
exports.loginUsersContoller = loginUsersContoller;
