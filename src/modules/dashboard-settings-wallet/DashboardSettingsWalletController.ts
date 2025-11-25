import { makeAutoObservable } from "mobx";
import { APICustomerValidationManager } from "./core/infra/APICustomerValidationManager";

export class DashboardSettingsWalletController {
  private static instance: DashboardSettingsWalletController;
  initialState = {
    customerKycCompleted: false,
    walletConnected: false,
    walletsSignedCustomer: [],
  }
  customerKycCompleted = this.initialState.customerKycCompleted;
  walletConnected = this.initialState.walletConnected;
  walletsSignedCustomer = this.initialState.walletsSignedCustomer;
  
  private constructor() {
    makeAutoObservable(this);
    this.getCustomerKycCompleted();
  }

  async getCustomerKycCompleted() {
    const controller = new APICustomerValidationManager();
    const isUserCompleted = await controller.execute("hi.kevindev@gmail.com");
    if (isUserCompleted instanceof Error) {
      this.customerKycCompleted = false;
      return;
    }
    this.customerKycCompleted = isUserCompleted.customerKycCompleted;
  }; 

  public static getInstance(): DashboardSettingsWalletController {
    if (!DashboardSettingsWalletController.instance) {
      DashboardSettingsWalletController.instance = new DashboardSettingsWalletController();
    }
    return DashboardSettingsWalletController.instance;
  }
}
