import { WEB3GetWalletConnect } from "../domain/applications/WEB3GetWalletConnect";
import { Wallet } from "../domain/models/Wallet";

export const ERROR_WALLET_CONNECT_CODE = {
  NO_WEB3_DETECTED: 404,
};

export class WEB3WalletConnectManager implements WEB3GetWalletConnect {
  private static instance: WEB3WalletConnectManager;

  public static getInstance(): WEB3WalletConnectManager {
    if (!WEB3WalletConnectManager.instance) {
      WEB3WalletConnectManager.instance = new WEB3WalletConnectManager();
    }
    return WEB3WalletConnectManager.instance;
  }

  async connect(): Promise<Wallet> {
    if (typeof window.ethereum === 'undefined') {
      return {
        isConnected: false
      }
    }
    try {
      const accounts = await window.ethereum.request!({ method: 'eth_requestAccounts' });
      const chainId = await window.ethereum.request!({ method: 'eth_chainId' });

      if (!accounts.length) {
        return { isConnected: false }
      }

      return {
        address: accounts[0],
        chain: chainId,
        isConnected: true
      } as Wallet;
    } catch (error) {
      return { isConnected: false }
    }
  }
}
