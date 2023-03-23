"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonationModel = exports.Donation = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const crypto_1 = __importDefault(require("crypto"));
class Donation {
}
__decorate([
    (0, typegoose_1.prop)({ required: true, default: crypto_1.default.randomUUID().toString() }),
    __metadata("design:type", String)
], Donation.prototype, "donation_id", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], Donation.prototype, "donation", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Donation.prototype, "username", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, default: "2023-03-16" }),
    __metadata("design:type", String)
], Donation.prototype, "donated_at", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], Donation.prototype, "donor_note", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], Donation.prototype, "company_name", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], Donation.prototype, "contact_number", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], Donation.prototype, "address", void 0);
__decorate([
    (0, typegoose_1.prop)({}),
    __metadata("design:type", String)
], Donation.prototype, "email", void 0);
exports.Donation = Donation;
exports.DonationModel = (0, typegoose_1.getModelForClass)(Donation, {
    schemaOptions: {
        timestamps: true,
    },
});
