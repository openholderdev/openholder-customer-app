export const formatEuropeanNumber = (num: number): string => 
  new Intl.NumberFormat('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(num) + " $";

// Todo is not workiing worrectlyly
export const calculatePercentage = (current: number, total: number): number => 
  total > 0 ? Math.round((current / total) * 100) : 0;
