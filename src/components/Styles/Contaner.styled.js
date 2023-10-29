import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;
  min-height: 100vh;
  // background-color: #111110;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 0px;
    min-height: 100vh;
  }
`;
