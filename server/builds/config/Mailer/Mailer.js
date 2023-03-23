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
exports.sendBookingMail = exports.sendMessageMail = exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
function sendMail(otp, to, from) {
    return __awaiter(this, void 0, void 0, function* () {
        const transporter = nodemailer_1.default.createTransport({
            service: "gmail",
            auth: {
                user: "nischal0407@xavier.edu.np",
                pass: "xAvier@123",
            },
        });
        let info = yield transporter.sendMail({
            from: `${from}`,
            to: `${to}`,
            subject: "Verfication Code ",
            text: `Your Otp code is ${otp}`,
        });
        return info;
    });
}
exports.sendMail = sendMail;
function sendMessageMail(message, title, to, from) {
    return __awaiter(this, void 0, void 0, function* () {
        const transporter = nodemailer_1.default.createTransport({
            service: "gmail",
            auth: {
                user: "nischal0407@xavier.edu.np",
                pass: "xAvier@123",
            },
        });
        let info = yield transporter.sendMail({
            from: `${from}`,
            to: `${to}`,
            subject: `${title}`,
            text: `${message}`,
        });
        return info;
    });
}
exports.sendMessageMail = sendMessageMail;
function sendBookingMail(startDate, endDate, bookingId, room_number, car_number, to, from) {
    return __awaiter(this, void 0, void 0, function* () {
        const transporter = nodemailer_1.default.createTransport({
            service: "gmail",
            auth: {
                user: "nischal0407@xavier.edu.np",
                pass: "xAvier@123",
            },
        });
        if (room_number) {
            let info = yield transporter.sendMail({
                from: `${from}`,
                to: `${to}`,
                subject: "Booking Successfull",
                text: `
      Your Room with id ${room_number} has been booked successfully.
       From:${startDate}
       End:${endDate}. 
       Your Booking id is ${bookingId}`,
            });
            return info;
        }
        else {
            let info = yield transporter.sendMail({
                from: `${from}`,
                to: `${to}`,
                subject: "Booking Successfull",
                text: `
      Your Car with number ${car_number} has been booked successfully.
       From:${startDate}
       End:${endDate}. 
       Your Booking id is ${bookingId}`,
            });
            return info;
        }
    });
}
exports.sendBookingMail = sendBookingMail;
