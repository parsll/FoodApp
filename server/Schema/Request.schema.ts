import { z, number, object, string, TypeOf } from "zod";

export const requestBodySchema = {
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
    date: string({
      required_error: "Date is required",
    }),
    price: number().optional(),
    description: string({
      required_error: "Description is required",
    }),
  }),
};

export type requestBodyType = TypeOf<typeof requestBodySchema.body>;
