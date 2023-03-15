import { Router } from "express";
import { DonationModel } from "../Model/Donation.model";
import crypto from "crypto";
const router = Router();

router.post("/", async (req, res) => {
  try {
    const {  amount , donor_name , donor_note, company_name, contact_number,   } = req.body;
    const donation_id = crypto;
    const donation = await DonationModel.create({
     donor_note,
      donation_id,
      donation: amount,
    });
    res.status(200).send(donation);
  } catch (error) {
    res.status(400).send("Error while donation");
  }
});

export default router;
