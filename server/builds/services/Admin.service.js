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
exports.adminResetPasswordService = exports.adminLoginService = exports.adminRegisterService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_1 = __importDefault(require("mongoose"));
const crypto_1 = __importDefault(require("crypto"));
const logger_1 = __importDefault(require("../config/logger/logger"));
const Admin_model_1 = require("../Model/Admin.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
function adminRegisterService({ firstname, lastname, email, password, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const checkEmail = yield findAdminService(email);
            if (checkEmail !== null) {
                return {
                    response: "This email already exist",
                    statusNumber: 400,
                };
            }
            else {
                const USERNAME = crypto_1.default.randomUUID();
                const registerAdminCommand = yield Admin_model_1.AdminModel.create({
                    _id: new mongoose_1.default.Types.ObjectId(),
                    username: USERNAME,
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: password,
                });
                const { username } = registerAdminCommand;
                const accessToken = jsonwebtoken_1.default.sign({ user_name: username }, config_1.default.ACCESS, {
                    expiresIn: "300s",
                });
                return {
                    response: "Admin registration sucessful",
                    statusNumber: 200,
                    acessToken: accessToken,
                    firstName: registerAdminCommand.firstname,
                };
            }
        }
        catch (error) {
            logger_1.default.error(JSON.stringify(error));
            return {
                response: error,
                statusNumber: 400,
            };
        }
    });
}
exports.adminRegisterService = adminRegisterService;
function adminLoginService({ email, password, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const checkEmail = yield findAdminService(email);
            if (checkEmail == null) {
                return {
                    response: "Your email doesnot exist",
                    statusNumber: 400,
                };
            }
            else if (yield checkEmail.comparePassword(password)) {
                const username = checkEmail.username;
                const acessToken = jsonwebtoken_1.default.sign({ username: username }, config_1.default.ACCESS, {
                    expiresIn: "1hr",
                });
                return {
                    response: "Admin Login Sucessfull",
                    statusNumber: 200,
                    acessToken: acessToken,
                    firstName: checkEmail.firstname,
                };
            }
            else {
                return {
                    response: "Incorrect Password",
                    statusNumber: 400,
                };
            }
        }
        catch (error) {
            logger_1.default.error(JSON.stringify(error));
            return {
                response: error,
                statusNumber: 400,
            };
        }
    });
}
exports.adminLoginService = adminLoginService;
function adminResetPasswordService({ username, newPassword, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resetPasswordCommand = yield resetPasswordService(username, newPassword);
            if (resetPasswordCommand.modifiedCount > 0) {
                return {
                    response: "Password reset Sucessful",
                    statusNumber: 200,
                };
            }
            else {
                return {
                    response: "Password reset Unsucessful",
                    statusNumber: 400,
                };
            }
        }
        catch (error) {
            return {
                response: error,
                statusNumber: 400,
            };
        }
    });
}
exports.adminResetPasswordService = adminResetPasswordService;
function findAdminService(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Admin_model_1.AdminModel.findOne({
            email,
        });
    });
}
function resetPasswordService(username, newPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Admin_model_1.AdminModel.updateOne({
            username,
        }, {
            $set: {
                password: yield bcrypt_1.default.hash(newPassword, 10),
            },
        });
    });
}
