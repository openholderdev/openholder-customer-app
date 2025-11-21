export interface APISignInCustomerRepository {
  validateCustomerEmail(email: string): Promise<boolean>;
};
