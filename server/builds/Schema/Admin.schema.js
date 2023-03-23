"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminresetPasswordSchema = exports.adminLoginBodySchema = exports.adminRegisterBodySchema = void 0;
const zod_1 = require("zod");
exports.adminRegisterBodySchema = {
    body: (0, zod_1.object)({
        firstname: (0, zod_1.string)({
            required_error: "Full name is required",
        }).regex(new RegExp(/^[a-z A-Z0-9_\-.]*$/gm), "Please enter a valid firstname"),
        lastname: (0, zod_1.string)({
            required_error: "Last name is required",
        }).regex(new RegExp(/^[a-z A-Z0-9_\-.]*$/gm), "Please enter a valid lastname"),
        email: (0, zod_1.string)({
            required_error: "Email is required",
        }).email("Please enter a valid email"),
        password: (0, zod_1.string)({
            required_error: "Password is required",
        })
            .min(8, "Password must be more than 8 characters")
            .max(64, "Password must be less than 64 characters"),
        confirmPassword: (0, zod_1.string)({ required_error: "Confirm Password is required" }),
    })
        .strict()
        .refine(({ password, confirmPassword }) => password === confirmPassword, {
        message: "confirmPassword must match password",
        path: ["confirmPassword"],
    }),
};
exports.adminLoginBodySchema = {
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({
            required_error: "Email is required",
        }).email("Please enter a valid email"),
        password: (0, zod_1.string)({
            required_error: "Password is required",
        }).max(84, "Password cannot be more than 64 characters"),
    }).strict(),
};
exports.adminresetPasswordSchema = {
    body: (0, zod_1.object)({
        username: (0, zod_1.string)({
            required_error: "username is rquired",
        }),
        newPassword: (0, zod_1.string)({
            required_error: "password is required",
        })
            .min(8, "Password cannot be less than 8 characters")
            .max(64, "Password cannote be more than 64 characters")
            .regex(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/), "Please enter a strong password"),
    }).strict(),
};
