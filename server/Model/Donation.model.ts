import { prop, pre, getModelForClass, Ref } from "@typegoose/typegoose";
import crypto from "crypto";
import bcrypt from "bcrypt";
import { User } from "./User.model";
import { FoodType } from "../Types/types";

export class Donation {
  @prop({
    required: true,
    unique: true,
    default: crypto.randomUUID().toString(),
  })
  donation_id: string;
  @prop({
    required: true,
  })
  username: Ref<User, User["username"]>;
  @prop({ required: true })
  expiry_date: string;
  @prop({ required: true })
  name: string;
  @prop({ required: true })
  email: Ref<User, User["email"]>;
  @prop({ required: true })
  address: string;
  @prop({ required: true })
  food_type: FoodType;
  @prop({ required: true, default: 0 })
  price: number;
  @prop({ required: true })
  description: string;
}

export const DonationModel = getModelForClass(Donation, {
  schemaOptions: {
    timestamps: true,
  },
});
