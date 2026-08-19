"use client";

import { useLeaseCalculator } from "@/Applications/form/LeaseCalculatorContext";

import { PrimaryButton } from "./styles/save-button.styled";

const SaveButton = () => {
  const { calculationEntry, handleSave } = useLeaseCalculator();

  if (!calculationEntry) return null;

  return <PrimaryButton onClick={handleSave}>Berekening opslaan</PrimaryButton>;
};

export default SaveButton;
