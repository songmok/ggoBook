import { minsize } from "utils/FontSize";
import { midllesize } from "utils/FontSize";
import styled from "styled-components";

const CompleteCss = styled.section`
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
  .독후감 {
    background: #bbb;
    height: 300px;
    width: 500px;
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

  .openBt {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: 30px;
    height: 30px;
    border: 0;
    background: none;
  }
`;

export default CompleteCss;
