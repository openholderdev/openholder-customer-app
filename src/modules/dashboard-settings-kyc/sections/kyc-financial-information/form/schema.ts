import { z } from "zod";

export const kycFinancialInformationSchema = z.object({
  isNewInvestor: z.boolean(),
  knowSecurityToken: z.boolean(),
  knowRisksInvesting: z.boolean(),
  investmentTotalPercentage: z.number()
    .min(0, "El porcentaje debe ser al menos 0")
    .max(100, "El porcentaje no puede exceder 100"),
  investmentCapitalOrigin: z.string().min(1, "El origen del capital es requerido"),
  periodicalPatrimonyOrigin: z.string().min(1, "El origen del patrimonio es requerido"),
  timeHorizonInvestment: z.string().min(1, "El horizonte temporal es requerido"),
  levelOfRiskAcceptance: z.number()
    .min(0, "Selecciona un nivel de riesgo"),
  investementObjectives: z.number()
    .min(0, "Selecciona un objetivo de inversión"),
  studiesLevel: z.number()
    .min(0, "Selecciona un nivel de estudios"),
  profesion: z.string().min(1, "La profesión es requerida"),
  anualIncome: z.number()
    .min(0, "Los ingresos anuales deben ser al menos 0"),
});

export type KycFinancialData = z.infer<typeof kycFinancialInformationSchema>;
