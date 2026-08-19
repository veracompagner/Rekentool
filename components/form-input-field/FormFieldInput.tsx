import {
  FieldWrapper,
  Input,
  SubtitleText,
  Title,
} from "@/components/form-input-field/styles/form-input-field.styled";

const FormFieldInput = ({
  title,
  subTitleText,
  value,
  onChange,
  type = "text",
  error,
}: {
  title: string;
  subTitleText?: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "number";
  error?: string;
}) => {
  return (
    <FieldWrapper>
      <Title>{title}</Title>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <SubtitleText $error={Boolean(error)}>
        {error ?? subTitleText}
      </SubtitleText>
    </FieldWrapper>
  );
};

export default FormFieldInput;
