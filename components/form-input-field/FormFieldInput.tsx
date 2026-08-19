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
  placeholder,
}: {
  title: string;
  subTitleText?: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "number";
  error?: string;
  placeholder?: string;
}) => {
  return (
    <FieldWrapper>
      <Title>{title}</Title>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || ""}
      />
      <SubtitleText $error={Boolean(error)}>
        {error ?? subTitleText}
      </SubtitleText>
    </FieldWrapper>
  );
};

export default FormFieldInput;
