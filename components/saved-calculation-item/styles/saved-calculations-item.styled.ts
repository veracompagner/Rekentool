import styled from "styled-components";

import { baseText } from "@/app/styles/typography.styled";

export const SavedCalculationItemWrapper = styled.li`
  padding: 12px 40px;
  margin: 0 -40px;

  & + & {
    border-top: 1px solid #e5e6e7;
  }
`;

export const SavedCalculationsName = styled.h3`
  ${baseText};
  font-weight: 700;
  font-size: 14px;
`;

export const SavedCalculationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4px 0;
`;

export const SavedCalculationPrice = styled.p`
  ${baseText};
  color: #056fff;
  font-weight: 700;
  font-size: 14px;
`;

export const SavedCalculationPriceWrapper = styled.div`
  display: flex;
  align-content: center;
`;

export const SavedCalculationsSubItemName = styled.p`
  ${baseText};
  font-weight: 400;
  font-size: 12px;
`;
