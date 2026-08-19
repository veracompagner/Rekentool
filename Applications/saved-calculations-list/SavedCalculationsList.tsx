"use client";

import {
  SavedCalculationsListTitle,
  SavedCalculationsListWrapper,
} from "@/Applications/saved-calculations-list/styles/saved-calculations-list.styled";
import SavedCalculationItem from "@/components/saved-calculation-item/SavedCalculationItem";

import { useLeaseCalculator } from "../form/LeaseCalculatorContext";

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
