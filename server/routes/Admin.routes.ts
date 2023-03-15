import express, { Router } from "express";
import {
  adminLoginController,
  adminRegisterController,
  adminResetPasswordController,
} from "../controllers/Admin.controller";
import { authenticateadmin } from "../middlewares/Authentication";
import { validate } from "../middlewares/SchemaParser";
import {
  adminLoginBodySchema,
  adminRegisterBodySchema,
  adminresetPasswordSchema,
} from "../Schema/Admin.schema";
const router = Router();

router.post(
  "/register",
  validate({ schema: adminRegisterBodySchema.body, typeOfReq: "Body" }),
  adminRegisterController
);
router.post(
  "/login",
  validate({ schema: adminLoginBodySchema.body, typeOfReq: "Body" }),
  adminLoginController
);

router.post(
  "/resetpassword",
  authenticateadmin,
  validate({ schema: adminresetPasswordSchema.body, typeOfReq: "Body" }),
  adminResetPasswordController
);

export default router;
