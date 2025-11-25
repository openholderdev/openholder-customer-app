import { Wallet } from "../models/Wallet";

export interface WEB3GetWalletConnect {
  connect(): Promise<void | Wallet>;
};
