import styled from "styled-components";

export const FormStyle = styled.div`
  border-left: 1px solid #e2e2e2;
  // border-top-right-radius: 14px;
  // border-bottom-right-radius: 14px;

  @media (max-width: ${({ theme }) => theme.mobile}){
    border: 1px solid #e2e2e2
    border-radius: 14px;
  }

  & > div {
    padding: 20px 40px;
  }
  & > div > h1 {
    font-size: 28px;
  }

  & > div > form > label {
    font-size: 12px;
    color: #5a6169;
    font-weight: 500;
    margin: 0px 0px 10px 0px;
  }

  & > div > form > input {
    padding: 8px 12px 8px 0px;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    width: 100%;
    background-color: #fffafa;
    margin: 0px 0px 16px 0px;
  }

  ::placeholder {
    font-size: 10px;
  }

  & > div > form > div > label {
    font-size: 12px;
    color: #111110;
    display: flex;
    flex-direction: row-reverse
    border: 1px solid red;
    align-items: center;
  }

  & > div > form > div > label > span a{
    text-decoration: none;
    font-size: 12px;
    color: #5b5bd6;
  }

  & > div > div h1 {
    font-size: 14px;
    text-align: center;
    font-weight: 500;
  }

  & > div > div h1 > a{
    text-decoration: none;
    color: #5b5bd6;
  }

`;
