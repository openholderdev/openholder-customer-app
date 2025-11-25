import { WalletCreation, WalletCreationDto } from "../models/Wallet";

export interface APIPostWalletRepository {
  execute(wallet: WalletCreationDto): Promise<WalletCreation>;
}
