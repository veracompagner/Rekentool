"use client";

import { useEffect, useState } from "react";
import { fetchLeaseCalculation, type LeaseCalculation } from "@/lib/graphql";

type UseLeaseCalculationInput = {
  isFormValid: boolean;
  brand: string;
  type: string;
  year: string;
  purchasePrice: string;
};

export const useLeaseCalculation = ({
  isFormValid,
  brand,
  type,
  year,
  purchasePrice,
}: UseLeaseCalculationInput) => {
  const [calculation, setCalculation] = useState<LeaseCalculation | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isFormValid) return;

    let cancelled = false;
    const timeout = setTimeout(() => {
      fetchLeaseCalculation({
        purchasePrice: Number(purchasePrice),
        object: { brand, type, year: Number(year) },
      })
        .then(({ leaseCalculation }) => {
          if (!cancelled) {
            setCalculation(leaseCalculation);
            setError(null);
          }
        })
        .catch(() => {
          if (!cancelled) {
            setError("Berekening kon niet worden uitgevoerd.");
          }
        });
    }, 400);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [isFormValid, brand, type, year, purchasePrice]);

  return { calculation, error };
};
