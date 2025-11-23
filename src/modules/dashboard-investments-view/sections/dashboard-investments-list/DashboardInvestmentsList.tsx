import { observer } from "mobx-react-lite";
import { DashboardInvestmentsViewController } from "../../DashboardInvestmentsViewController";
import { useEffect } from "react";
import { UIInvestment } from "../../core/Domain/models/Investment";
import {
  TOKEN_STATUS_CONFIGS,
  TOKEN_TYPES_CONFIGS,
  TYPE_INVERSION,
} from "./DashboardInvestments.constants";
import { RiContractFill } from "react-icons/ri";
import { calculatePercentage, formatEuropeanNumber } from "../../utils/currency-utils";
import ProgressBar from "@/src/components/ProgressBar";
import CardInvestment from "./components/CardInvestment";

export const DashboardInvestmentList = observer(function DashboardInvestmentList() {
  const store = DashboardInvestmentsViewController.getInstance();

  useEffect(() => {
    initializeInvestments();
  }, []);

  const initializeInvestments = async () => {
    if (!store.listInvestments) {
      const investments = await store.fetchInvestments();
      store.listInvestments = investments ? investments : [];
    }
  };

  return (
    <section data-testid="dashboard-investment-list" className="px-4 pt-10 pb-40">
      <div className="flex flex-col md:grid md:grid-cols-12 gap-3 md:gap-1">
        {store.getListInvestments().map((entry: UIInvestment) => (
          <CardInvestment entry={entry} key={entry.investmentId} />
        ))}
      </div>
    </section>
  );
});
