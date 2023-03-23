import { Router } from "express";
import { DonationModel } from "../Model/Donation.model";
import crypto from "crypto";
import { sendMail, sendMessageMail } from "../config/Mailer/Mailer";
import { authenticateToken } from "../middlewares/Authentication";
import {
  donateController,
  readAllTypeController,
  requestController,
} from "../controllers/Donation.controller";
const router = Router();

router.post("/", async (req, res) => {
  try {
    const {
      amount,
      donor_name,
      donor_note,
      email,
      company_name,
      contact_number,
      address,
    } = req.body;
    const donation_id = crypto.randomUUID();
    const donation = await DonationModel.create({
      donor_note,
      donation_id,
      donation: amount,
      username: donor_name,
      company_name,
      contact_number,
      address,
      email,
    });
    sendMessageMail(
      "Our representative will contact you for further information",
      "Thank you for your donation",
      email,
      "Parsll.com"
    );
    res.status(200).send(donation);
  } catch (error) {
    res.status(400).send("Error while donation");
  }
});

router.post("/request", authenticateToken, requestController);
router.post("/donation", authenticateToken, donateController);
router.get("/readalltype", readAllTypeController);

export default router;
