import { minsize } from "utils/FontSize";
import { midllesize } from "utils/FontSize";
import styled from "styled-components";
const CompleteCss = styled.section`
  display: flex;
  .bookDetail {
    width: calc(100% - 25vw);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    span {
      font-size: 24px;
      margin: 50px;
    }
    .bookChoose {
      font-size: 30px;
      font-weight: 500;
      margin: 10px 0;
    }
    .bookForm {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .bookRating {
        display: flex;
        margin: 30px 0;
        textarea {
          resize: none;
          border-radius: 5px;
        }
      }
      .bookReview {
        display: flex;
        margin: 30px 0;
        textarea {
          resize: none;
          border-radius: 5px;
        }
      }
    }
  }
`;
export default CompleteCss;
