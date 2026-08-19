import styled from "styled-components";

export const FormInputWrapper = styled.div`
  display: grid;
  gap: 16px;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 24px;
  }
`;
