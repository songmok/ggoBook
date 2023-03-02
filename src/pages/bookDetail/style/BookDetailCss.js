import styled from "styled-components";
import { midllesize } from "utils/FontSize";
import { sectionwrap } from "utils/Layout";

const BookDetailCss = styled.section`
  ${sectionwrap}
  display: flex;
  justify-content: center;
  gap: 50px;
  .bookLeft {
    width: 400px;
    padding: 2px;
    display: flex;
    flex-direction: column;
    .bookInfo {
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        font-size: 28px;
        font-weight: 600;
        text-align: center;
        margin: 2px 0;
      }
      .author {
        font-size: 15px;
        margin: 2px 0;
      }
      .publisher {
        font-size: 14px;
        color: #767676;
        margin: 2px 0;
      }
      .page {
        font-size: 14px;
        color: #767676;
        margin: 2px 0;
      }
      img {
        margin: 30px 0;
        width: 300px;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
          rgba(0, 0, 0, 0.23) 0px 6px 6px;
      }
    }
    .bookBts {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin: 10px 0;
      button {
        border: none;
        border-radius: 15px;
        width: 9.375vw;
        height: 2.6042vw;
        background: #bbb;
        margin: 0 20px;
        font-size: ${midllesize};
        :hover {
          background: gray;
        }
      }
    }
  }
  .bookRight {
    width: 600px;
    padding: 2px;
    .buttons {
      display: flex;
      justify-content:center ;
      gap: 20px;
      margin-bottom: 10px;
    }
  }
`;

export default BookDetailCss;
