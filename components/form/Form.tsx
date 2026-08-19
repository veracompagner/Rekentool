import FormFields from "@/components/form/FormFields";
import SaveButton from "@/components/form/SaveButton";
import { FormWrapper } from "@/components/form/styles/form.styled";

const Form = () => {
  return (
    <FormWrapper>
      <FormFields />
      <SaveButton />
    </FormWrapper>
  );
};

export default Form;
