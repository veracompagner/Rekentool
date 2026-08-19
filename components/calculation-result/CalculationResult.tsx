"use client";

import { useLeaseCalculator } from "@/Applications/form/LeaseCalculatorContext";

import SavedCalculationItem from "../saved-calculation-item/SavedCalculationItem";

const CalculationResult = () => {
  const { calculationEntry } = useLeaseCalculator();

  if (!calculationEntry) return null;

  return (
    <ul>
      <SavedCalculationItem saved={calculationEntry} />
    </ul>
  );
};

export default CalculationResult;
