import express, { Router } from "express";
import {
  forgotPasswordController,
  getAllUsersContoller,
  loginUsersContoller,
  registerUserController,
  resendOtpController,
  resetPasswordController,
  verifyFpOtpController,
  verifyOtpController,
} from "../controllers/User.controller";
import { validate } from "../middlewares/SchemaParser";
import { loginBodySchema } from "../Schema/User.schema";
const router = Router();

router.get("/all", getAllUsersContoller);
router.post("/login", loginUsersContoller);
router.post("/register", registerUserController);

// router.post(
//   "/verifyotp",
//   validate({ schema: tokenBodySchema.body, typeOfReq: "Body" }),
//   verifyOtpController
// );

// router.post(
//   "/resendotp",
//   validate({ schema: resendTokenBodySchema.body, typeOfReq: "Body" }),
//   resendOtpController
// );

// router.post(
//   "/forgotpassword",
//   validate({ schema: forgotPasswordBodySchema.body, typeOfReq: "Body" }),
//   forgotPasswordController
// );

// router.post(
//   "/verifyfpotp",
//   validate({ schema: verifyfpotpBodySchema.body, typeOfReq: "Body" }),
//   verifyFpOtpController
// );

// router.post(
//   "/resetpassword",
//   validate({ schema: resetPasswordSchema.body, typeOfReq: "Body" }),
//   resetPasswordController
// );

export default router;
