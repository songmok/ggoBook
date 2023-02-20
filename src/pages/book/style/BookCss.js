import { minsize } from "utils/FontSize";
import { midllesize } from "utils/FontSize";
import styled from "styled-components";

const BookCss = styled.section`
  .bookWrap {
    display: flex;
    width: 40vw;
    position: relative;
    margin: 0 auto;
    .bookGnb {
      width: 40vw;
      height: 100%;
      overflow-y: scroll;
      background: #eaf9ff;
      .bookList {
        a {
          display: flex;
          width: 100%;
          height: 300px;
          padding: 10px;
          border-bottom: 2px solid #ffffff;
          .bookImg {
            padding: 5px;
            width: 30%;
            height: 100%;
            background-color: yellow;
            border: 0;
            border-radius: 15px;
            margin-right: 5px;
            img {
            }
          }
          .text {
            position: relative;
            width: 70%;
            height: 100%;
            p {
              color: #000000;
              display: block;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              text-align: center;
              > span {
                display: block;
                margin-bottom: 20px;
                white-space: nowrap;
              }
              .title {
                font-weight: bold;
                font-size: ${midllesize};
              }
              .author {
                font-size: ${minsize};
              }
              .pub {
                font-size: ${minsize};
              }
            }
          }
        }
      }
    }
  }
`;

export default BookCss;
