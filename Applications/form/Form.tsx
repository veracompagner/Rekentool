import { FormWrapper } from "@/Applications/form/styles/form.styled";
import CalculationResult from "@/components/calculation-result/CalculationResult";
import FormFields from "@/components/form-fields/FormFields";
import SaveButton from "@/components/save-button/SaveButton";

const Form = () => {
  return (
    <FormWrapper>
      <FormFields />
      <CalculationResult />
      <SaveButton />
    </FormWrapper>
  );
};

export default Form;
