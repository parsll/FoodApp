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
exports.changePasswordService = exports.deleteUserService = exports.getAllUserService = exports.findUserService = exports.resetPassswordService = exports.verifyFpOtpService = exports.forgotPasswordService = exports.resendOtpService = exports.verifyOtpService = exports.loginUserService = exports.createUserService = void 0;
const User_model_1 = require("../Model/User.model");
const crypto_1 = __importDefault(require("crypto"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
const Mailer_1 = require("../config/Mailer/Mailer");
function createUserService({ email, password, firstname, lastname, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const username = crypto_1.default.randomUUID();
            const response = yield User_model_1.UserModel.create({
                _id: new mongoose_1.default.Types.ObjectId(),
                email,
                password,
                firstname,
                lastname,
            });
            if (response) {
                const otp = Math.floor(Math.random() * 90000) + 10000;
                const resp = (0, Mailer_1.sendMail)(otp, email, "nischal0407@xavier.edu.np");
                const setOtp = yield User_model_1.UserModel.updateOne({ email: email }, { $set: { otp: otp } });
                if (setOtp) {
                    return { response: "Code has been sent to your email" };
                }
            }
        }
        catch (error) {
            if (error.code && error.code === 11000)
                throw "User already exist";
            throw "Error";
        }
    });
}
exports.createUserService = createUserService;
function loginUserService({ email, password, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield findUserService(email);
        if (!user || Object.entries(user).length === 0) {
            return "No User Found";
        }
        else if (yield user.comparePassword(password)) {
            if (user.verified == true) {
                const username = user.username;
                const token = jsonwebtoken_1.default.sign({ username: username }, config_1.default.ACCESS);
                return { access: token, email: email, firstName: user.firstname };
            }
            else {
                return "Account not verified";
            }
        }
        else {
            return "Password Incorrect";
        }
    });
}
exports.loginUserService = loginUserService;
function verifyOtpService({ email, otp }) {
    return __awaiter(this, void 0, void 0, function* () {
        const searchUser = yield User_model_1.UserModel.findOne({ email });
        if (!searchUser || Object.entries(searchUser).length === 0) {
            return "Invalid Verfication Token";
        }
        else if (yield searchUser.compareOtp(otp)) {
            const verifyUser = yield User_model_1.UserModel.updateOne({
                email: email,
            }, {
                $set: {
                    verified: true,
                    otp: Math.floor(Math.random() * 90000) + 10000,
                },
            });
            if (verifyUser) {
                const token = jsonwebtoken_1.default.sign({ username: searchUser.username }, config_1.default.ACCESS);
                return {
                    access: token,
                    email: searchUser.email,
                    firstName: searchUser.firstname,
                };
            }
            else {
                return "Error";
            }
        }
        else {
            return "Otp is not correct";
        }
    });
}
exports.verifyOtpService = verifyOtpService;
function resendOtpService({ email, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield User_model_1.UserModel.findOne({ email });
        if (user) {
            const otp = Math.floor(Math.random() * 90000) + 10000;
            const resp = (0, Mailer_1.sendMail)(otp, email, "nischal0407@xavier.edu.np");
            const setOtp = yield User_model_1.UserModel.updateOne({ email: email }, { $set: { otp: otp } });
            if (setOtp) {
                return { response: "OTP has been sent" };
            }
            else {
                return "Error";
            }
        }
        else {
            return "Email not found";
        }
    });
}
exports.resendOtpService = resendOtpService;
function forgotPasswordService({ email, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield User_model_1.UserModel.findOne({ email });
        if (user) {
            if (user.verified) {
                const otp = Math.floor(Math.random() * 90000) + 10000;
                const resp = (0, Mailer_1.sendMail)(otp, email, "nischal0407@xavier.edu.np");
                const setOtp = yield User_model_1.UserModel.updateOne({ email: email }, { $set: { otp: otp } });
                if (setOtp) {
                    return { response: "OTP has been sent to your email" };
                }
                else {
                    return "Error";
                }
            }
            else {
                return "Account not verified";
            }
        }
        else {
            return "Account doesnot exist";
        }
    });
}
exports.forgotPasswordService = forgotPasswordService;
function verifyFpOtpService({ email, otp, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const searchUser = yield User_model_1.UserModel.findOne({ email });
        if (!searchUser || Object.entries(searchUser).length === 0) {
            return "Invalid email sent";
        }
        else if (yield searchUser.compareOtp(otp)) {
            const verifyUser = yield User_model_1.UserModel.updateOne({
                email: email,
            }, {
                $set: {
                    verified: true,
                    otp: Math.floor(Math.random() * 90000) + 10000,
                },
            });
            if (verifyUser) {
                return { response: "Otp verify successfull" };
            }
            else {
                return "Error";
            }
        }
        else {
            return "Otp is not correct";
        }
    });
}
exports.verifyFpOtpService = verifyFpOtpService;
function resetPassswordService({ email, newPassword, }) {
    return __awaiter(this, void 0, void 0, function* () {
        if (email) {
            const resetPasswordCommand = yield User_model_1.UserModel.updateOne({ email }, { $set: { password: yield bcrypt_1.default.hash(newPassword, 10) } });
            if (resetPasswordCommand) {
                return { response: "Password reset Sucessful" };
            }
        }
        else {
            return "Email not found ";
        }
    });
}
exports.resetPassswordService = resetPassswordService;
function findUserService(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield User_model_1.UserModel.findOne({
            email,
        });
    });
}
exports.findUserService = findUserService;
function getAllUserService() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield User_model_1.UserModel.find();
    });
}
exports.getAllUserService = getAllUserService;
function deleteUserService(username) {
    return __awaiter(this, void 0, void 0, function* () {
        return User_model_1.UserModel.findOneAndDelete({
            username,
        });
    });
}
exports.deleteUserService = deleteUserService;
function changePasswordService(username, password, newPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        return User_model_1.UserModel.updateOne({
            username,
        }, {
            $set: {
                password: yield bcrypt_1.default.hash(newPassword, 10),
            },
        });
    });
}
exports.changePasswordService = changePasswordService;
// export async function sendMailService(
//   title: string,
//   message: string
// ): Promise<any> {
//   const resp = sendMessageMail(
//     message,
//     title,
//     "nisuacharya22@gmail.com",
//     "nischal0407@xavier.edu.np"
//   );
//   console.log(resp);
//   return {
//     response: "Message Sent check your email",
//     statusNumber: 200,
//   };
// }
