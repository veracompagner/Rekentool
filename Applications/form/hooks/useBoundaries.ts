"use client";

import { useEffect, useState } from "react";

import { fetchBoundaries, LeaseBoundaries } from "@/lib/graphql";

export const useBoundaries = () => {
  const [boundaries, setBoundaries] = useState<LeaseBoundaries | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBoundaries()
      .then(({ boundaries }) => setBoundaries(boundaries))
      .catch(() => setError("Kon de geldige waarden niet ophalen."));
  }, []);

  return { boundaries, error };
};
