import { z, number, object, string, TypeOf } from "zod";

const foodType = z.enum(["FERTILIZATION", "INTAKE"]);
export const donationBodySchema = {
  body: object({
    username: string({
      required_error: "Username is required",
    }),
    name: string({
      required_error: "Organization or individual name is required",
    }),
    address: string({
      required_error: "Address is required",
    }),
    expiry_date: string({
      required_error: "Date is required",
    }),
    food_type: foodType,
    price: number().optional(),
    email: string({ required_error: "Email is required" }).email(
      "Enter a valid email"
    ),
    description: string({
      required_error: "Description is required",
    }),
  }),
};

export type donationBodyType = TypeOf<typeof donationBodySchema.body>;
