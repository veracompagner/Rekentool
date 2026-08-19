"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { useBoundaries } from "@/components/form/hooks/useBoundaries";
import { useLeaseCalculation } from "@/components/form/hooks/useLeaseCalculation";
import { useSavedCalculations } from "@/components/form/hooks/useSavedCalculations";
import { formatCurrency } from "@/lib/formatCurrency";
import { validateBoundary } from "@/lib/validateBoundary";
import type { LeaseBoundaries, LeaseCalculation } from "@/lib/graphql";
import type { SavedCalculation } from "@/lib/savedCalculations";

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
  calculation: LeaseCalculation | null;
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

  const { calculation, error: calculationError } = useLeaseCalculation({
    isFormValid,
    brand,
    type,
    year,
    purchasePrice,
  });

  const { savedCalculations, save } = useSavedCalculations();

  const handleSave = () => {
    if (!calculation) return;

    save({
      id: crypto.randomUUID(),
      brand,
      type,
      year: Number(year),
      purchasePrice: Number(purchasePrice),
      calculation,
    });
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
        calculation,
        calculationError: boundariesError ?? calculationError,
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
