"use client";

import { PrimaryButton } from "@/components/form/styles/form.styled";
import { useLeaseCalculator } from "@/components/form/LeaseCalculatorContext";

const SaveButton = () => {
  const { calculationEntry, handleSave } = useLeaseCalculator();

  if (!calculationEntry) return null;

  return <PrimaryButton onClick={handleSave}>Berekening opslaan</PrimaryButton>;
};

export default SaveButton;
