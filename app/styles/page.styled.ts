import styled from "styled-components";

export const Container = styled.div`
  padding: 48px;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
