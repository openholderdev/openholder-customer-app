import DashboardNavbar from "@/src/components/DashboardNavbar";
import NavigationMobile from "@/src/components/NavigationMobile";
import { DasboardSuccessRegisterView } from "@/src/modules/dashboard-succes-register-view/DasboardSuccessRegisterView";

export default function Investments() {
  return (
    <main className="h-screen relative">
      <DashboardNavbar />
      <DasboardSuccessRegisterView />
      <NavigationMobile />
    </main>
  );
}
