import styled from "styled-components";
import { defaltsize, midllesize, minsize } from "utils/FontSize";

const BookCss = styled.section`
  margin: 0 100px;
  padding-top: 50px;
  .search {
    padding: 15px 10px;
    border-radius: 15px;
  }
  .bookWrap {
    display: block;
    width: 30%;
    background-color: pink;
    .bookGnb {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      .bookList {
        > a {
          display: flex;
          > .bookImg {
            width: 155px;
            height: 210px;
            background-color: red;
            border: 1px solid #fff;
            img {
            }
          }
          .text {
            position: relative;
            width: calc(100% - 155px);
            background-color: skyblue;
            p {
              color: #fff;
              display: block;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              text-align: center;
              > span {
                display: block;
                padding-bottom: 30px;
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
