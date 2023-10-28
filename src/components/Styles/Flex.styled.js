import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    margin: 10px 0px 10px 0px;
  }

  & > div > label {
    font-size: 12px;
    color: #111110;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  a {
    text-decoration: none;
    font-size: 12px;
    color: #5b5bd6;
  }

  a:hover {
    color: #6e6ade;
    font-weight: bold;
  }
`;
