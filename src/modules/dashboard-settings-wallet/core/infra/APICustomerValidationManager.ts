import axios from "axios";
import { APIGetCustomerValidations } from "../domain/applications/APIGetCustomerValidations";
import { CustomerValidations } from "../domain/models/CustomerValidations";

export class APICustomerValidationManager implements APIGetCustomerValidations {
  async execute(email: string): Promise<Error | CustomerValidations> {
    try {
      const getCustomerKycValidation = await axios.get(`/api/customer/kyc/get-customer-validation?email=${email}`)
      
      if (!getCustomerKycValidation.data) {
        return {
          customerKycCompleted: false,
        }
      }
      return {
        customerKycCompleted: getCustomerKycValidation.data.customerKycCompleted,
      } as CustomerValidations;
    } catch (error) {
      return {
          customerKycCompleted: false,
      }
    }
  }
}
