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
const express_1 = require("express");
const Donation_model_1 = require("../Model/Donation.model");
const crypto_1 = __importDefault(require("crypto"));
const Mailer_1 = require("../config/Mailer/Mailer");
const router = (0, express_1.Router)();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { amount, donor_name, donor_note, email, company_name, contact_number, address, } = req.body;
        const donation_id = crypto_1.default.randomUUID();
        const donation = yield Donation_model_1.DonationModel.create({
            donor_note,
            donation_id,
            donation: amount,
            username: donor_name,
            company_name,
            contact_number,
            address,
            email,
        });
        (0, Mailer_1.sendMessageMail)("Our representative will contact you for further information", "Thank you for your donation", email, "Parsll.com");
        res.status(200).send(donation);
    }
    catch (error) {
        res.status(400).send("Error while donation");
    }
}));
exports.default = router;
