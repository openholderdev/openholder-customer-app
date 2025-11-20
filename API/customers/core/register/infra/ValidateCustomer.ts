import { ValidatorCustomer } from "../domain/models/ValidatorCustomer";
import connectDB from "@/API/configs/db/mongoconnection";
import { NextApiRequest, NextApiResponse } from "next";


export class ValidateCustomer implements ValidatorCustomer {
  private req: NextApiRequest;
  private res: NextApiResponse;
  
  constructor(req: NextApiRequest, res: NextApiResponse) {
    this.req = req;
    this.res = res;
  };
  
  async validateCustomer(): Promise<void> {
    try {
      const db =  await connectDB();
      const customerCollection = db.collection("customers");
      const customer = await customerCollection.findOne({ email: this.req.body.email });

      if (customer && customer.verificationToken === this.req.body.token) {
        const customerVerified = await customerCollection.updateOne(
          { email: this.req.body.email },
          { $set: { emailVerified: true, verificationToken: null } }
        )
        this.res.status(200).json({
          isError: false,
          code: 200,
          messsage: "Email verified successfully",
          data: customerVerified
        });
      } else {
        this.res.status(400).json({
          isError: true,
          code: 400,
          message: "Invalid token or email"
        });
      }
    } catch (error) {
      console.error('Error validating customer:', error);
    }
  }
}
