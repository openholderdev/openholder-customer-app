import { CustomerKycSchema } from "../models/CustomerKycData";

export interface APICustomerKycRepository {
  execute(kyc: CustomerKycSchema): Promise<{ customerKycCompleted: boolean } | Error>;
}
