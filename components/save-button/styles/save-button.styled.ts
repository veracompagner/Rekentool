import styled from "styled-components";

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
