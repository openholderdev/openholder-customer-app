import axios from "axios";
import { APICustomerKycRepository } from "../applications/APICustomerKycRepository";
import { CustomerKycSchema } from "../domain/models/CustomerKycData";

export class APICustomerKycManager implements APICustomerKycRepository {
  constructor() {}

  async execute(kyc: CustomerKycSchema): Promise<{ customerKycCompleted: boolean } | Error> {
    try {
      const request = await axios.post('/api/customer/kyc/post-send-kyc', kyc);
      return Promise.resolve({ customerKycCompleted: request.data.customerKycCompleted });
    } catch {
      return Promise.resolve({ customerKycCompleted: false });
    }
  }
}
