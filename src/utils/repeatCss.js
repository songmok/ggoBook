import styled from "styled-components";

export const bfaf = `
content: "";
position: absolute;
background-color: #000;
`;
// 버튼
export const Button = styled.div`
  display: block;
  button {
    padding: 0.7rem;
    border: 0.1rem #ffffff solid;
    border-radius: 20px;
    color: #ffffff;
    cursor: pointer;
    background-color: #02c8cc;
    &:hover {
      border: 0.1rem #17202a solid;
      color: #17202a;
    }
  }
`;
