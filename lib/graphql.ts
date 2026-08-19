const GRAPHQL_ENDPOINT =
  "https://frontend-developer-assignment.vercel.app/api/graphql";

export type Boundary = {
  min: number;
  max: number;
};

export type LeaseBoundaries = {
  purchasePrice: Boundary;
  objectYear: Boundary;
};

export type LeaseCalculationInput = {
  purchasePrice: number;
  object: {
    brand: string;
    type: string;
    year: number;
  };
};

export type LeaseCalculation = {
  balloonPayment: number;
  downPayment: number;
  handlingFee: number;
  monthlyPayment: number;
  tenor: number;
  totalCosts: number;
};

const graphqlRequest = async <T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> => {
  const res = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  const { data, errors } = await res.json();

  if (errors?.length) {
    throw new Error(errors[0].message);
  }

  return data as T;
};

export const fetchBoundaries = (): Promise<{
  boundaries: LeaseBoundaries;
}> => {
  return graphqlRequest(`
    query Boundaries {
      boundaries {
        purchasePrice {
          min
          max
        }
        objectYear {
          min
          max
        }
      }
    }
  `);
};

export const fetchLeaseCalculation = (
  input: LeaseCalculationInput,
): Promise<{ leaseCalculation: LeaseCalculation }> => {
  return graphqlRequest(
    `
      query LeaseCalculation($input: LeaseCalculationInput!) {
        leaseCalculation(input: $input) {
          balloonPayment
          downPayment
          handlingFee
          monthlyPayment
          tenor
          totalCosts
        }
      }
    `,
    { input },
  );
};
