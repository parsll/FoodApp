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
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (...args) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        for (let i = 0; i < args.length; i++) {
            if (args[i].typeOfReq === "Body") {
                yield args[i].schema.parseAsync(req.body);
            }
            else {
                yield args[i].schema.parseAsync(req.params);
            }
        }
        return next();
    }
    catch (error) {
        return res.status(400).send(error);
    }
});
exports.validate = validate;
