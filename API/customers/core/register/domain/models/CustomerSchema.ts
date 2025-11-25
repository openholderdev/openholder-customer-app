export interface ICustomer {
  name: string;
  email: string;
  phone: number;
  password: string;
  emailVerified: boolean;
  customerId?: string;
  kycStatus?: 'PENDING' | 'VERIFIED' | 'REJECTED' | 'NO_STARTED';
}
