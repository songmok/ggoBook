import styled from "styled-components";
import { midllesize, minsize } from "utils/FontSize";
const ListBookCss = styled.article`
  display: flex;
  .bookList {
    display: flex;
    width: 25vw;
    height: 49vw;
    .bookGnb {
      width: 23.44vw;
      height: 100%;
      overflow-y: scroll;
      background: #eaf9ff;
      .bookInfo {
        display: flex;
        width: 100%;
        padding: 10px;
        height: 200px;
        border-bottom: 2px solid #ffffff;
        .bookImg {
          padding: 4px;
          background-color: #666;
          border: 0;
          border-radius: 5px;
          margin-right: 5px;
          img {
            display: flex;
            align-items: center;
            width: 120px;
            height: 170px;
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
  /* 아래의 모든 코드는 영역::코드로 사용 */
  .bookGnb::-webkit-scrollbar {
    width: 10px; /* 스크롤바의 너비 */
  }
  .bookGnb::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #217af4; /* 스크롤바의 색상 */
    border-radius: 10px;
  }
  .bookGnb::-webkit-scrollbar-track {
    background: #eaf9ff; /*스크롤바 뒷 배경 색상*/
  }
`;
export default ListBookCss;
