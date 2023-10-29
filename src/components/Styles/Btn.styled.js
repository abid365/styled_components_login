import styled from "styled-components";

export const BtnStyle = styled.div`
  margin: 40px auto;
  display: flex;
  justify-content: center;

  & > button {
    padding: 8px 20px;
    background-color: #18191b;
    color: white;
    font-weight: 600;
    transition: all 0.2s ease-in-out;
    width: 60%;
  }

  & > button:hover {
    background-color: #7d66d9;
    border: 1px solid #7d66d9;
    transform: scale(1.1);
  }
`;
