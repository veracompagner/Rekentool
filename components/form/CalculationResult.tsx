"use client";

import SavedCalculationItem from "@/components/saved-calculations-list/SavedCalculationItem";
import { useLeaseCalculator } from "@/components/form/LeaseCalculatorContext";

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
