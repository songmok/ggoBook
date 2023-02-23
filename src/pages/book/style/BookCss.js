import { minsize } from "utils/FontSize";
import { midllesize } from "utils/FontSize";
import styled from "styled-components";

const BookCss = styled.section`
  .searchWrap {
    position: relative;
    margin: 10px auto;
    width: 40vw;
    display: flex;
    .search {
      width: 40vw;
      border: 3px solid #00b4cc;
      border-right: none;
      padding: 20px;
      height: 20px;
      border-radius: 15px 0 0 15px;
      outline: none;
      color: #9dbfaf;
      &:focus {
        color: #00b4cc;
      }
    }
    .searchButton {
      width: 40px;
      height: 46px;
      border: none;
      background: #00b4cc;
      text-align: center;
      color: #fff;
      border-radius: 0 10px 10px 0;
      cursor: pointer;
    }
  }
  .bookWrap {
    display: flex;
    width: 40vw;
    position: relative;
    margin: 0 auto;
    height: 85vh;
    .bookGnb {
      width: 40vw;
      height: 903px;
      overflow-y: scroll;
      overflow-x: hidden;
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
            background-color: #666;
            border: 0;
            border-radius: 5px;
            margin-right: 5px;
            img {
              width: 200px;
              height: 270px;
            }
          }
          .text {
            position: relative;
            width: 70%;
            height: 100%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            p {
              color: #000000;
              display: block;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              text-align: center;
              width: 100%;
              > span {
                padding: 0 20px;
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
