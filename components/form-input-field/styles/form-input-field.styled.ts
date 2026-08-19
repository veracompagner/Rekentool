import styled, { css } from "styled-components";

import { baseText } from "@/app/styles/typography.styled";

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubtitleText = styled.p<{ $error?: boolean }>(
  ({ $error }) => css`
    ${baseText};
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    color: ${$error ? "#d92d20" : "inherit"};
  `,
);

export const Input = styled.input`
  max-width: 275px;
  background-color: #f6f6f6;
  padding: 12px;
  border-radius: 5px;
  height: 40px;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  ${baseText};
  color: #5a5e65;
  margin-bottom: 8px;
`;
