import { RequestModel } from "../Model/Request.model";
import { requestBodyType } from "../Schema/Request.schema";
import crypto from "crypto";
import { donationBodyType } from "../Schema/Donation.schema";
import { DonationModel } from "../Model/Donation.model";

export async function requestService({
  username,
  address,
  name,
  description,
  date,
  price,
}: requestBodyType): Promise<{ response: any; statusNumber: number }> {
  const request_id = crypto.randomUUID();
  const addRequestCommand = await RequestModel.create({
    request_id,
    username,
    address,
    name,
    description,
    date,
    price,
  });
  if (addRequestCommand) {
    return {
      response: "Requested",
      statusNumber: 200,
    };
  } else {
    return {
      response: "Error Requesting",
      statusNumber: 200,
    };
  }
}

export async function donationService({
  food_type,
  username,
  address,
  name,
  description,
  expiry_date,
  price,
  email,
}: donationBodyType): Promise<{ response: any; statusNumber: number }> {
  const donate_id = crypto.randomUUID();
  const addRequestCommand = await DonationModel.create({
    donate_id,
    username,
    address,
    name,
    description,
    expiry_date,
    price,
    email,
  });
  if (addRequestCommand) {
    return {
      response: "Donation Requested",
      statusNumber: 200,
    };
  } else {
    return {
      response: "Error Donating  Request",
      statusNumber: 200,
    };
  }
}

export async function readAllTypeService(): Promise<any> {
  const readDonationCommand = await DonationModel.find();
  const readRequestCommand = await RequestModel.find();
  return {
    response: { Donations: readDonationCommand, Request: readRequestCommand },
    statusNumber: 200,
  };
}
