"use client";

import { createContext, type ReactNode, useContext, useState } from "react";

import { useBoundaries } from "@/Applications/form/hooks/useBoundaries";
import { useLeaseCalculation } from "@/Applications/form/hooks/useLeaseCalculation";
import { useSavedCalculations } from "@/Applications/form/hooks/useSavedCalculations";
import { formatCurrency } from "@/lib/formatCurrency";
import { LeaseBoundaries } from "@/lib/graphql";
import type { SavedCalculation } from "@/lib/savedCalculations";
import { validateBoundary } from "@/lib/validateBoundary";

type LeaseCalculatorContextValue = {
  boundaries: LeaseBoundaries | null;
  brand: string;
  setBrand: (value: string) => void;
  type: string;
  setType: (value: string) => void;
  year: string;
  setYear: (value: string) => void;
  purchasePrice: string;
  setPurchasePrice: (value: string) => void;
  yearError?: string;
  purchasePriceError?: string;
  isFormValid: boolean;
  calculationEntry: SavedCalculation | null;
  calculationError: string | null;
  savedCalculations: SavedCalculation[];
  handleSave: () => void;
};

const LeaseCalculatorContext =
  createContext<LeaseCalculatorContextValue | null>(null);

export const LeaseCalculatorProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { boundaries, error: boundariesError } = useBoundaries();
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");

  const yearError = validateBoundary(year, boundaries?.objectYear);
  const purchasePriceError = validateBoundary(
    purchasePrice,
    boundaries?.purchasePrice,
    formatCurrency,
  );

  const isFormValid =
    boundaries !== null &&
    brand.trim() !== "" &&
    type.trim() !== "" &&
    year !== "" &&
    purchasePrice !== "" &&
    !yearError &&
    !purchasePriceError;

  const { calculation, error: calculationFetchError } = useLeaseCalculation({
    isFormValid,
    brand,
    type,
    year,
    purchasePrice,
  });

  const { savedCalculations, save } = useSavedCalculations();

  const calculationEntry: SavedCalculation | null = calculation
    ? {
        id: "preview",
        brand,
        type,
        year: Number(year),
        purchasePrice: Number(purchasePrice),
        calculation,
      }
    : null;

  const handleSave = () => {
    if (!calculationEntry) return;
    save({ ...calculationEntry, id: crypto.randomUUID() });
  };

  return (
    <LeaseCalculatorContext.Provider
      value={{
        boundaries,
        brand,
        setBrand,
        type,
        setType,
        year,
        setYear,
        purchasePrice,
        setPurchasePrice,
        yearError,
        purchasePriceError,
        isFormValid,
        calculationEntry,
        calculationError: boundariesError ?? calculationFetchError,
        savedCalculations,
        handleSave,
      }}
    >
      {children}
    </LeaseCalculatorContext.Provider>
  );
};

export const useLeaseCalculator = () => {
  const context = useContext(LeaseCalculatorContext);
  if (!context) {
    throw new Error(
      "useLeaseCalculator must be used within a LeaseCalculatorProvider",
    );
  }
  return context;
};
