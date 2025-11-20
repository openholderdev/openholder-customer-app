import { UUID } from "crypto";

export interface ValidatorCustomer {
  validateCustomer(): Promise<void>;
}
