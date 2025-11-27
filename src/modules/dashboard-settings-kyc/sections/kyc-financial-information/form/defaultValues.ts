import { KycFinancialData } from "./schema";

export const kycFinancialDefaultValues: KycFinancialData = {
  isNewInvestor: false,
  knowSecurityToken: false,
  knowRisksInvesting: false,
  investmentTotalPercentage: 25,
  investmentCapitalOrigin: "",
  periodicalPatrimonyOrigin: "",
  timeHorizonInvestment: "",
  levelOfRiskAcceptance: 0,
  investementObjectives: 0,
  studiesLevel: 0,
  profesion: "",
  anualIncome: 0,
};
