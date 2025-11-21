import axios from "axios";
import { APISignInCustomerRepository } from "../applications/APISignInCustomerRepository";
import { CUSTOMER_CHECK_EMAIL_AVAILABLE_ENDPOINT } from "@/API/configs/endpoints";

export class APISignInCustomer implements APISignInCustomerRepository {
  async validateCustomerEmail(email: string): Promise<boolean> {
    try {
      const { data } = await axios.post(CUSTOMER_CHECK_EMAIL_AVAILABLE_ENDPOINT, {
        email: email
      });
      if (!data) {
        return false;
      }
      return data.data.isEmailAvailable;
    } catch (error) {
      return false;
    }
  }
}
