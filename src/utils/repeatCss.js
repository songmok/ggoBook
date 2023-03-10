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
    background-color: #bb6569;
    &:hover {
      border: 0.1rem #6c7e05 solid;
      color: #fff;
      background-color: #e5d566;
    }
  }
`;
export const addButton = `
position: absolute;
bottom: 0px;
width: 100%;
`;
export const myScheduleBtn = `
width: 77px;
height: 52px;
`;
