import styled from "styled-components";
import { baseText } from "@/components/styles/typography.styled";

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
