import { observer } from "mobx-react-lite";
import WalletCompleteKycBanner from "./sections/wallet-complete-kyc-banner/WalletCompleteKycBanner";
import WalletDetected from "./sections/wallet-detected/WalletDetected";
import WalletInfo from "./sections/wallet-info.tsx/WalletInfo";
import WalletNav from "./sections/wallet-nav/WalletNav";
import WalletSignContracts from "./sections/wallet-sign-contracts/WalletSignContracts";
import { DashboardSettingsWalletController } from "./DashboardSettingsWalletController";
import WalletConnectBanner from "./sections/wallet-connect-banner/WalletConnectBanner";

export const DashboardSettingsWallet = observer(function DashboardSettingsWallet() {
  const store = DashboardSettingsWalletController.getInstance();

  return (
    <main className="bg-white pb-[6rem]">
      <WalletNav />
      {!store.customerKycCompleted ? (
        <>
          <WalletCompleteKycBanner />
          <WalletInfo />
        </>
      ) : (
        <WalletConnectBanner />
      )}
      {store.customerKycCompleted && store.walletConnected && (
        <>
          <WalletDetected />
          <WalletSignContracts />
        </>
      )}
    </main>
  );
});
