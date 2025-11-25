import NavigationMobile from "@/src/components/NavigationMobile";
import DashboardInvestmentsView from "@/src/modules/dashboard-investments-view/DashboardInvestmentsView";
import DashboardSettingsProfile from "@/src/modules/dashboard-settings-profile/DashboardSettingsProfile";

export default function DashboardProfile() {
  return (
    <main className="h-screen relative bg-[#f1f2f3]">
      <DashboardSettingsProfile />
      <NavigationMobile />
    </main>
  );
}
