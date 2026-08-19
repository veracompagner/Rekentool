"use client";

import { useEffect, useState } from "react";

import {
  loadSavedCalculations,
  persistSavedCalculations,
  type SavedCalculation,
} from "@/lib/savedCalculations";

export const useSavedCalculations = () => {
  const [savedCalculations, setSavedCalculations] = useState<
    SavedCalculation[]
  >([]);

  useEffect(() => {
    Promise.resolve().then(() => setSavedCalculations(loadSavedCalculations()));
  }, []);

  const save = (entry: SavedCalculation) => {
    const updated = [entry, ...savedCalculations];
    setSavedCalculations(updated);
    persistSavedCalculations(updated);
  };

  return { savedCalculations, save };
};
