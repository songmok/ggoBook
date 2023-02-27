import styled from "styled-components";
import { headertitle, midllesize } from "utils/FontSize";

export const FormModalCss = styled.div``;
export const FormCss = styled.form`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  padding: 50px;
  .header {
    align-self: center;
    display: flex;
    width: 25%;
    flex-direction: column;
    justify-items: center;
    margin-right: 50px;
    gap: 30px;
    h2 {
      text-align: center;
      font-size: ${headertitle};
    }
    img {
      display: block;
    }
  }
  ul {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    .dateWrap {
      display: flex;
      justify-content: space-around;
      justify-content: center;
      .react-date-picker {
        margin-right: 30px;
        margin-bottom: 50px;
      }
      .dateHead {
        font-size: ${midllesize};
        margin-right: 10px;
      }
    }
    .descWrap {
      position: absolute;
      left: 0;
      top: 25%;
      label {
        font-size: ${midllesize};
      }
      .desc {
        display: block;
        width: 600px;
        height: 185px;
        resize: none;
        padding: 10px;
      }
      .submit {
        position: absolute;
        right: 0;
      }
    }
  }
`;
