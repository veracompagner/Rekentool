import {
  SavedCalculationItemWrapper,
  SavedCalculationPrice,
  SavedCalculationPriceWrapper,
  SavedCalculationsName,
  SavedCalculationsSubItemName,
  SavedCalculationWrapper,
} from "@/components/saved-calculations-list/styles/saved-calculations-list.styled";
import { formatCurrency } from "@/lib/formatCurrency";
import type { SavedCalculation } from "@/lib/savedCalculations";

const SavedCalculationItem = ({ saved }: { saved: SavedCalculation }) => {
  const subItems = [
    {
      label: "Aanbetaling",
      value: formatCurrency(saved.calculation.downPayment),
    },
    {
      label: "Slottermijn",
      value: formatCurrency(saved.calculation.balloonPayment),
    },
    {
      label: "Looptijd",
      value: `${saved.calculation.tenor} ${saved.calculation.tenor === 1 ? "maand" : "maanden"}`,
    },
  ];

  return (
    <SavedCalculationItemWrapper>
      <SavedCalculationWrapper>
        <SavedCalculationsName>
          {saved.brand} {saved.type}
        </SavedCalculationsName>
        <SavedCalculationPriceWrapper>
          <SavedCalculationPrice>
            {formatCurrency(saved.calculation.monthlyPayment)}
          </SavedCalculationPrice>
          /maand
        </SavedCalculationPriceWrapper>
      </SavedCalculationWrapper>

      {subItems.map(({ label, value }) => (
        <SavedCalculationWrapper key={label}>
          <SavedCalculationsSubItemName>{label}</SavedCalculationsSubItemName>
          <SavedCalculationsSubItemName>{value}</SavedCalculationsSubItemName>
        </SavedCalculationWrapper>
      ))}
    </SavedCalculationItemWrapper>
  );
};

export default SavedCalculationItem;
