import { makeAutoObservable } from 'mobx';
import { APISignInCustomer } from './core/infra/APISignInCustomer';

export class SignInCustomerController {
  private static instance: SignInCustomerController;
  isLoading: boolean = false;
  error: string | null = null;
  private constructor() {
    makeAutoObservable(this); 
  }

  async doVerifyEmail(email: string) : Promise<boolean> {
    try {
      const signInCustomer = new APISignInCustomer();
      this.isLoading = true;
      const valide = await signInCustomer.validateCustomerEmail(email);
      this.isLoading = false;
      return valide;
    } catch (error) {
      return false;
    }
  }

  public static getInstance(): SignInCustomerController {
    if (!SignInCustomerController.instance) {
      SignInCustomerController.instance = new SignInCustomerController();
    }
    return SignInCustomerController.instance;
  }

  resetState() {
    this.isLoading = false;
    this.error = null;
  }
}
