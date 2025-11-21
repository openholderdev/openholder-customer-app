import { AuthenticateRepository } from "@/API/customers/core/Authenticator/infra/AuthenticateRepository";
import { NextApiRequest, NextApiResponse } from "next";

export default function PostAuthenticateCustomer(req: NextApiRequest, res: NextApiResponse) {
  try {
    const CustomerController = new AuthenticateRepository(req, res);
    CustomerController.authenticate();
  } catch (error) {
    res.status(500).json({
      isError: true,
      code: 500,
      message: "Internal server error"
    });
  }
}
