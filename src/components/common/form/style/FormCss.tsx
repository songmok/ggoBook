import styled from "styled-components";
import { defaltsize, midllesize, minsize } from "utils/FontSize";

const FormCss = styled.div`
  width: 100%;
  .input {
    border: 0;
    border-bottom: 1px solid;
    /* border-radius: 12px; */
    height: 3.125vw;
    width: 100%;
    font-size: ${midllesize};
    margin: 5px 0;
    padding-left: 10px;
  }
  .submit {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: 12px;
    background-color: #ff6f61;
    height: 4.6875vw;
    width: 100%;
    margin: 10px 0px;
    color: #ffffff;
    font-size: 25px;
    font-weight: 600;
  }
  p {
    font-size: ${defaltsize};
    color: red;
    padding-left: 10px;
    margin: 0;
  }
  .agree {
    text-align: center;
    font-size: ${minsize};
    margin: 15px 0;
  }
`;

export default FormCss;
