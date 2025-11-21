import NavigationMobile from "@/src/components/NavigationMobile";
import DashboardInvestmentsView from "@/src/modules/dashboard-investments-view/DashboardInvestmentsView";


export default function Investments() {
  return (
    <main className="h-screen relative">
      <DashboardInvestmentsView />
      <NavigationMobile />
    </main>
  )
}
