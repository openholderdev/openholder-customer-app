import { AuthenticateCustomer } from "@/API/customers/core/register/infra/RegisterCustomer";
import { NextApiRequest, NextApiResponse } from "next";

export default function PostRegisterCustomer(req: NextApiRequest, res: NextApiResponse) {
  try {
    const CustomerController = new AuthenticateCustomer(req, res);
    CustomerController.registerCustomer();
  } catch (error) {
    console.error('error')
  }
}
