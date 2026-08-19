import type { Boundary } from "@/lib/graphql";

export const validateBoundary = (
  value: string,
  boundary: Boundary | undefined,
  formatValue: (value: number) => string = String,
): string | undefined => {
  if (!boundary || !value) return undefined;

  const numericValue = Number(value);
  if (numericValue < boundary.min || numericValue > boundary.max) {
    return `Tussen ${formatValue(boundary.min)} en ${formatValue(boundary.max)}`;
  }

  return undefined;
};
