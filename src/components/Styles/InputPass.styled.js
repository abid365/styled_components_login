import styled from "styled-components";

export const InputPass = styled.div`
  position: relative;
  & > input {
    padding: 8px 12px;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    background-color: #fffafa;
    width: 100%;
  }
  & > button {
    position: absolute;
    right: -24px;
    top: 1px;
    padding: 8px 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: #18191b;
    border: none;
  }

  & > button:hover {
    background-color: #7d66d9;
  }
`;
