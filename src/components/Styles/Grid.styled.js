import styled from "styled-components";

export const GridLayOut = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
