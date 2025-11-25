import { makeAutoObservable } from "mobx";
import { APICustomerValidationManager } from "./core/infra/APICustomerValidationManager";
import { WEB3WalletConnectManager } from "./core/infra/WEB3WalletConnectManager";
import { Wallet, WalletCreation } from "./core/domain/models/Wallet";
import { APIWalletCreationManager } from "./core/infra/APIWalletCreationManager";

export class DashboardSettingsWalletController {
  private static instance: DashboardSettingsWalletController;
  initialState = {
    customerKycCompleted: false,
    walletConnected: false,
    connectingWallet: false,
    walletConnectedData: null as Wallet | null,
    walletsSignedCustomer: [],
  }
  walletConnectedData = this.initialState.walletConnectedData;
  connectingWallet = this.initialState.connectingWallet;
  customerKycCompleted = this.initialState.customerKycCompleted;
  walletConnected = this.initialState.walletConnected;
  walletsSignedCustomer = this.initialState.walletsSignedCustomer;
  
  private constructor() {
    makeAutoObservable(this);
  }

  async getCustomerKycCompleted(email: string): Promise<boolean | void> {
    const controller = new APICustomerValidationManager();
    const isUserCompleted = await controller.execute(email);
    if (isUserCompleted instanceof Error) {
      return false;
    };
    return isUserCompleted.customerKycCompleted;
  }; 

  async createCustomerWallet(signature: 'GLOBAL' | 'SPAIN'): Promise<void> {
    const controller = APIWalletCreationManager.getInstance();
    const result : WalletCreation = await controller.execute({
      walletAddress: this.walletConnectedData?.address as string,
      customerId: '23324123', 
      alias: 'Default Alias',
      whitelist: signature 
    });
    console.log("Wallet creation result:", result);
  };

  async connectWallet(): Promise<void> {
    this.connectingWallet = true;
    const result : Wallet | void = await WEB3WalletConnectManager.getInstance().connect();
    if (result.isConnected === true) {
      this.walletConnected = result?.isConnected ?? false;
      this.walletConnectedData = result;
    }
    this.connectingWallet = false;
  };
  public static getInstance(): DashboardSettingsWalletController {
    if (!DashboardSettingsWalletController.instance) {
      DashboardSettingsWalletController.instance = new DashboardSettingsWalletController();
    }
    return DashboardSettingsWalletController.instance;
  }
}
