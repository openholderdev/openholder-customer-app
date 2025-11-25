export interface CustomerWallet {
  customerId: string;
  walletId: string;
  alias: string;
  walletAddress: string;
  globalStatus: 'PENDING' | 'VERIFIED' | 'REJECTED';
  spainStatus: 'PENDING' | 'VERIFIED' | 'REJECTED';
  creationDate: Date;
  investments: any // To be defined in future versions
}
