"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordSchema = exports.verifyfpotpBodySchema = exports.forgotPasswordBodySchema = exports.resendTokenBodySchema = exports.tokenBodySchema = exports.changePasswordSchema = exports.loginBodySchema = exports.registerBodySchema = void 0;
const zod_1 = require("zod");
exports.registerBodySchema = {
    body: (0, zod_1.object)({
        firstname: (0, zod_1.string)({
            required_error: "Full name is required",
        }).regex(new RegExp(/^[a-z A-Z0-9_\-.]*$/gm), "Please enter a valid firstname"),
        lastname: (0, zod_1.string)({
            required_error: "Last name is required",
        }).regex(new RegExp(/^[a-z A-Z0-9_\-.]*$/gm), "Please enter a valid lastname"),
        email: (0, zod_1.string)({
            required_error: "Email is required",
        }).email("Plz enter a valid email"),
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
exports.loginBodySchema = {
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({ required_error: "Email is required" }).email("Please Enter a valid email"),
        password: (0, zod_1.string)({
            required_error: "Password is required",
        }).max(64, "Password cannot be more than 64 characters"),
    }).strict(),
};
exports.changePasswordSchema = {
    body: (0, zod_1.object)({
        username: (0, zod_1.string)({
            required_error: "username is rquired",
        }).max(32, "Please enter a valid username"),
        password: (0, zod_1.string)({
            required_error: "Old password is required",
        })
            .min(8, "Password too short")
            .max(64, "Password too long"),
        newPassword: (0, zod_1.string)({
            required_error: "password is required",
        })
            .min(8, "Password cannot be less than 8 characters")
            .max(64, "Password cannote be more than 64 characters"),
    }).refine(({ newPassword, password }) => newPassword === password, {
        message: "Cannot set your password as same as your previous password",
        path: ["newPassword"],
    }),
};
exports.tokenBodySchema = {
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({ required_error: "Email is required" }).email("Send a valid email"),
        otp: (0, zod_1.number)({ required_error: "Otp is required" })
            .min(10000, "should atleast be 5 characters")
            .max(99999, "Cannot be greater than 5 characters"),
    }),
};
exports.resendTokenBodySchema = {
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({
            required_error: "verfication token is required",
        }).email("Send a valid email"),
    }),
};
exports.forgotPasswordBodySchema = {
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({
            required_error: "verfication token is required",
        }).email("Send a valid email"),
    }),
};
exports.verifyfpotpBodySchema = {
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({ required_error: "Email is required" }).email("Send a valid email"),
        otp: (0, zod_1.number)({ required_error: "Otp is required" })
            .min(10000, "should atleast be 5 characters")
            .max(99999, "Cannot be greater than 5 characters"),
    }),
};
exports.resetPasswordSchema = {
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({
            required_error: "username is rquired",
        }).email("Send a valid email"),
        newPassword: (0, zod_1.string)({
            required_error: "password is required",
        })
            .min(8, "Password cannot be less than 8 characters")
            .max(64, "Password cannote be more than 64 characters"),
        confirmPassword: (0, zod_1.string)({
            required_error: "Confirm Password is required",
        }),
    })
        .strict()
        .refine(({ newPassword, confirmPassword }) => newPassword === confirmPassword, {
        message: "confirmPassword must match password",
        path: ["confirmPassword"],
    }),
};
