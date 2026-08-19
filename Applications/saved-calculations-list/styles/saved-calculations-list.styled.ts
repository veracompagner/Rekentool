import styled from "styled-components";

import { baseText } from "@/app/styles/typography.styled";

export const SavedCalculationsListTitle = styled.h2`
  ${baseText};
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 12px;
`;

export const SavedCalculationsListWrapper = styled.div`
  padding: 40px;
  background-color: #f6f6f6;
  border-radius: 0 0 6px 6px;

  @media (min-width: 600px) {
    border-radius: 0 6px 6px 0;
    width: 421px;
  }
`;
