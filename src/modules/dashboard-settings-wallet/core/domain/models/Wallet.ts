export interface Wallet {
  address?: string;
  chain?: string;
  isConnected: boolean;
  error?: {
    code: number;
  }
}

export interface WalletCreationDto {
  customerId: string;
  walletAddress: string;
  whitelist: 'GLOBAL' | 'SPAIN';
  alias?: string;
}

export interface WalletCreation {
  isSucces: boolean;
};
