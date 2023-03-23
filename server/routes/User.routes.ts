import express, { Router, Request } from "express";
import { upload } from "../utils/imgUploader";
import {
  forgotPasswordController,
  getAllUsersContoller,
  getUserProfileController,
  loginUsersContoller,
  registerUserController,
  resendOtpController,
  resetPasswordController,
  verifyFpOtpController,
  verifyOtpController,
} from "../controllers/User.controller";
import { validate } from "../middlewares/SchemaParser";
import {
  forgotPasswordBodySchema,
  loginBodySchema,
  registerBodySchema,
  resendTokenBodySchema,
  resetPasswordSchema,
  tokenBodySchema,
  userProfileSchema,
  verifyfpotpBodySchema,
} from "../Schema/User.schema";
import { authenticateToken } from "../middlewares/Authentication";
const router = Router();

router.get("/all", getAllUsersContoller);
router.post("/login", loginUsersContoller);
router.post(
  "/register",
  upload("UserProfile_Images").single("user_profile"),
  registerUserController
);

router.get(
  "/getuserprofile",
  authenticateToken,
  validate({ schema: userProfileSchema.body, typeOfReq: "Body" }),
  getUserProfileController
);

router.post(
  "/verifyotp",
  validate({ schema: tokenBodySchema.body, typeOfReq: "Body" }),
  verifyOtpController
);

router.post(
  "/resendotp",
  validate({ schema: resendTokenBodySchema.body, typeOfReq: "Body" }),
  resendOtpController
);

router.post(
  "/forgotpassword",
  validate({ schema: forgotPasswordBodySchema.body, typeOfReq: "Body" }),
  forgotPasswordController
);

router.post(
  "/verifyfpotp",
  validate({ schema: verifyfpotpBodySchema.body, typeOfReq: "Body" }),
  verifyFpOtpController
);

router.post(
  "/resetpassword",
  validate({ schema: resetPasswordSchema.body, typeOfReq: "Body" }),
  resetPasswordController
);

export default router;
