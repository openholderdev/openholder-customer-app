export interface CustomerAuthenticationDomain {
  _id: object;
  customerId: string;
  firstName: string;
  email: string;
  password?: string;
  phone: string;
  emailVerified: boolean;
  verificationToken: string | null;
}
