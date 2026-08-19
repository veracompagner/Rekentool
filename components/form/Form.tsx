import FormFields from "@/components/form/FormFields";
import SaveButton from "@/components/form/SaveButton";
import { FormWrapper } from "@/components/form/styles/form.styled";
import CalculationResult from "@/components/form/CalculationResult";

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
