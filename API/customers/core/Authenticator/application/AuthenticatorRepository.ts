import { CustomerAuthenticationDomain } from "../domain/models/CustomerAuthenticationDomain";

export interface APIAuthenticationRepository {
  authenticate(): Promise<CustomerAuthenticationDomain | void>;
};
