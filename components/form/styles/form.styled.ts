import styled from "styled-components";

export const FormInputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 24px;
`;

export const PrimaryButton = styled.button`
  background-color: #ffa100;
  color: white;
  padding: 12px 20px;
  border-radius: 4px;
  margin-top: 16px;

  &:disabled {
    background-color: #f6f6f6;
    color: #5a5e65;
    cursor: not-allowed;
  }
`;

export const FormWrapper = styled.div`
  padding: 40px;
  background-color: white;
  border-radius: 6px 0 0 6px;
`;
