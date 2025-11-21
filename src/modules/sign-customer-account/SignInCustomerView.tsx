import { LoginCustomerContent } from "./sections/login-customer-content/LoginCustomerContent";
import LoginCustomerHeader from "./sections/login-customer-header/LoginCustomerHeader";

export default function SignInCustomerView() {
  return (
    <main>
      <LoginCustomerHeader />
      <LoginCustomerContent />
    </main>
  );
}
