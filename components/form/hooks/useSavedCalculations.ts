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
    queueMicrotask(() => setSavedCalculations(loadSavedCalculations()));
  }, []);

  const save = (entry: SavedCalculation) => {
    const updated = [...savedCalculations, entry];
    setSavedCalculations(updated);
    persistSavedCalculations(updated);
  };

  return { savedCalculations, save };
};
