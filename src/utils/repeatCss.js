import styled from "styled-components";
export const bfaf = `
content: "";
position: absolute;
background-color: #000;
`;
// 버튼
export const Button = styled.div`
  z-index: 99;
  position: relative;
  button {
    padding: 0.7rem;
    border: 0.1rem #fff solid;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    background-color: #942e44 !important;
    &:hover {
      border: 0.1rem #6c7e05 solid;
      color: #fff;
      background-color: #8002a7 !important;
    }
  }
`;
export const addButton = `
position: absolute;
bottom: 10px;
width: 100%;
`;
