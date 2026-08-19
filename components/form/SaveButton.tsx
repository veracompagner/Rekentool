"use client";

import { PrimaryButton } from "@/components/form/styles/form.styled";
import { useLeaseCalculator } from "@/components/form/LeaseCalculatorContext";

const SaveButton = () => {
  const { isFormValid, calculation, handleSave } = useLeaseCalculator();

  return (
    <PrimaryButton disabled={!isFormValid || !calculation} onClick={handleSave}>
      Berekening opslaan
    </PrimaryButton>
  );
};

export default SaveButton;
