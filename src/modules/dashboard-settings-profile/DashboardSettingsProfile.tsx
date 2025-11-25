import DashboardSettingsProfileContent from "./sections/dashboard-settings-profile-content/DashboardSettingsProfileContent";
import DashboardSettingsProfileHeader from "./sections/dashboard-settings-profile-header/DashboardSettingsProfileHeader";
import DashboardSettingsProfileNav from "./sections/dashboard-settings-profile-nav/DashboardSettingsProfileNav";

export default function DashboardSettingsProfile() {
  return (
    <main>
      <DashboardSettingsProfileHeader />
      <DashboardSettingsProfileNav />
      <DashboardSettingsProfileContent />
    </main>
  );
}
