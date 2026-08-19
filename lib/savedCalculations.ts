import type { LeaseCalculation } from "@/lib/graphql";

const STORAGE_KEY = "leaseCalculations";

export type SavedCalculation = {
  id: string;
  brand: string;
  type: string;
  year: number;
  purchasePrice: number;
  calculation: LeaseCalculation;
};

export const loadSavedCalculations = (): SavedCalculation[] => {
  if (typeof window === "undefined") return [];

  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
  } catch {
    return [];
  }
};

export const persistSavedCalculations = (
  savedCalculations: SavedCalculation[],
) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedCalculations));
};
