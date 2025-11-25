import DashboardNavbar from "@/src/components/DashboardNavbar";
import NavigationMobile from "@/src/components/NavigationMobile";
import { DashboardSettingsWallet } from "@/src/modules/dashboard-settings-wallet/DashboardSettingsWallet";

export default function DashboardSettingsWalletView() {
  return (
    <main className="h-screen relative">
      <DashboardNavbar />
      <DashboardSettingsWallet />
      <NavigationMobile />
    </main>
  );
}
