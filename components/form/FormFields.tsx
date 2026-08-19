"use client";

import FormFieldInput from "@/components/form-input-field/FormFieldInput";
import { FormInputWrapper } from "@/components/form/styles/form.styled";
import { useLeaseCalculator } from "@/components/form/LeaseCalculatorContext";
import { formatCurrency } from "@/lib/formatCurrency";

const FormFields = () => {
  const {
    boundaries,
    brand,
    setBrand,
    type,
    setType,
    year,
    setYear,
    purchasePrice,
    setPurchasePrice,
    yearError,
    purchasePriceError,
  } = useLeaseCalculator();

  return (
    <FormInputWrapper>
      <FormFieldInput title="Merk" value={brand} onChange={setBrand} />
      <FormFieldInput title="Type" value={type} onChange={setType} />
      <FormFieldInput
        title="Bouwjaar"
        type="number"
        value={year}
        onChange={setYear}
        error={yearError}
        subTitleText={
          boundaries
            ? `Tussen ${boundaries.objectYear.min} en ${boundaries.objectYear.max}`
            : undefined
        }
      />
      <FormFieldInput
        title="Aanschafwaarde"
        type="number"
        value={purchasePrice}
        onChange={setPurchasePrice}
        error={purchasePriceError}
        subTitleText={
          boundaries
            ? `Tussen ${formatCurrency(boundaries.purchasePrice.min)} en ${formatCurrency(boundaries.purchasePrice.max)}`
            : undefined
        }
      />
    </FormInputWrapper>
  );
};

export default FormFields;
