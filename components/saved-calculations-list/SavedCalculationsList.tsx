"use client";

import SavedCalculationItem from "@/components/saved-calculations-list/SavedCalculationItem";
import {
  SavedCalculationsListTitle,
  SavedCalculationsListWrapper,
} from "@/components/saved-calculations-list/styles/saved-calculations-list.styled";
import { useLeaseCalculator } from "@/components/form/LeaseCalculatorContext";

const SavedCalculationsList = () => {
  const { savedCalculations, calculationError } = useLeaseCalculator();

  return (
    <SavedCalculationsListWrapper>
      {calculationError && <p>{calculationError}</p>}

      <SavedCalculationsListTitle>
        Bewaarde berekeningen
      </SavedCalculationsListTitle>
      <ul>
        {savedCalculations.map((saved) => (
          <SavedCalculationItem key={saved.id} saved={saved} />
        ))}
      </ul>
    </SavedCalculationsListWrapper>
  );
};

export default SavedCalculationsList;
