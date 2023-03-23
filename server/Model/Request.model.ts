import { prop, pre, getModelForClass, Ref } from "@typegoose/typegoose";
import crypto from "crypto";
import bcrypt from "bcrypt";
import { User } from "./User.model";

export class Request {
  @prop({
    required: true,
    unique: true,
    default: crypto.randomUUID().toString(),
  })
  request_id: string;
  @prop({
    required: true,
  })
  username: Ref<User, User["username"]>;
  @prop({ required: true })
  date: string;
  @prop({ required: true })
  name: string;
  @prop({ required: true })
  address: string;
  @prop({ required: true, default: 0 })
  price: number;
  @prop({ required: true })
  description: string;
}

export const RequestModel = getModelForClass(Request, {
  schemaOptions: {
    timestamps: true,
  },
});
