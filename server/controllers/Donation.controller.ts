import { Request, Response, NextFunction, response } from "express";
import logger from "../config/logger/logger";
import { RequestModel } from "../Model/Request.model";
import { donationBodyType } from "../Schema/Donation.schema";
import { requestBodyType } from "../Schema/Request.schema";
import {
  donationService,
  readAllTypeService,
  requestService,
} from "../services/Donation.service";

export const requestController = async (
  req: Request<{}, {}, requestBodyType>,
  res: Response
): Promise<void> => {
  const { name, price, address, username, date, description } = req.body;
  try {
    const { response, statusNumber } = await requestService({
      name,
      address,
      username,
      price,
      date,
      description,
    });
    res.status(statusNumber).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const donateController = async (
  req: Request<{}, {}, donationBodyType>,
  res: Response
): Promise<void> => {
  const {
    food_type,
    expiry_date,
    name,
    price,
    email,
    address,
    username,
    description,
  } = req.body;
  try {
    const { response, statusNumber } = await donationService({
      food_type,
      name,
      address,
      username,
      price,
      expiry_date,
      description,
      email,
    });
    res.status(statusNumber).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const readAllTypeController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { response, statusNumber } = await readAllTypeService();
    res.status(statusNumber).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};
