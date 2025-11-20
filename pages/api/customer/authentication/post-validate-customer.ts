import { ValidateCustomer } from "@/API/customers/core/register/infra/ValidateCustomer";
import { NextApiRequest, NextApiResponse } from "next";

export default function PostValidateCustomer(req: NextApiRequest, res: NextApiResponse) {
  try {
    const CustomerController = new ValidateCustomer(req, res);
    CustomerController.validateCustomer();
  } catch (error) {
    console.error('error')
  }
}
