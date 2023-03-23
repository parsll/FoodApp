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
exports.AdminModel = exports.Admin = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const crypto_1 = __importDefault(require("crypto"));
const bcrypt_1 = __importDefault(require("bcrypt"));
let Admin = class Admin {
    comparePassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bcrypt_1.default.compare(password, this.password);
        });
    }
    compareToken(token) {
        return token === this.resetPassword;
    }
};
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Admin.prototype, "firstname", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Admin.prototype, "lastname", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Admin.prototype, "email", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true,
        default: crypto_1.default.randomUUID().toString(),
        unique: true,
    }),
    __metadata("design:type", String)
], Admin.prototype, "username", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Admin.prototype, "password", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, unique: true, default: crypto_1.default.randomInt(99999) }),
    __metadata("design:type", Number)
], Admin.prototype, "otpToken", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, unique: true, default: crypto_1.default.randomInt(99999) }),
    __metadata("design:type", Number)
], Admin.prototype, "resetPassword", void 0);
Admin = __decorate([
    (0, typegoose_1.pre)("save", function (next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isModified("password") || this.isNew) {
                const hash = yield bcrypt_1.default.hash(this.password, 10);
                this.password = hash;
                return next();
            }
        });
    })
], Admin);
exports.Admin = Admin;
exports.AdminModel = (0, typegoose_1.getModelForClass)(Admin, {
    schemaOptions: {
        timestamps: true,
    },
});
