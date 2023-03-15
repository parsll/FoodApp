import { prop, pre, getModelForClass } from "@typegoose/typegoose";
import crypto from "crypto";
import bcrypt from "bcrypt";

export class Donation {
  @prop({ required: true, default: crypto.randomUUID().toString() })
  donation_id: string;

  @prop({ required: true })
  donation: number;

  @prop({
    required: true,
  })
  username: string;
  @prop({ required: true, default: "2023-03-16" })
  donated_at: string;
  @prop({})
  donor_note: string;
  @prop({})
  company_name: string;
  @prop({})
  contact_number: string;
  @prop({})
  address: string;
  @prop({})
  email: string;
}

export const DonationModel = getModelForClass(Donation, {
  schemaOptions: {
    timestamps: true,
  },
});
