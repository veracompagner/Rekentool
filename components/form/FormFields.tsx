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
      <FormFieldInput
        title="Merk"
        value={brand}
        placeholder="Bijvoorbeeld DAF"
        onChange={setBrand}
      />
      <FormFieldInput
        title="Type"
        value={type}
        placeholder="Bijvoorbeeld XF480"
        onChange={setType}
      />
      <FormFieldInput
        title="Bouwjaar"
        type="number"
        value={year}
        placeholder="Bijvoorbeeld 2021"
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
        placeholder={`Bijvoorbeeld ${formatCurrency(50000)}`}
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
