import styled from "styled-components";
import { midllesize, minsize } from "utils/FontSize";
import { addButton } from "utils/repeatCss";

const ListBookCss = styled.article`
  display: flex;
  position: relative;
  .scheduleList {
    margin-left: 20px;
  }
  .bookList {
    display: flex;
    width: 20vw;
    height: 50vw;
    flex-direction: column;
    background: #eaf9ff;
    .header {
      height: 50px;
      background-color: #fefefe;
      display: flex;
      align-items: center;
      justify-content: center;
      h3 {
        display: block;
        font-size: ${midllesize};
        color: #555;
      }
    }
    .bookGnb {
      width: 23.44vw;
      height: 100%;
      overflow-y: scroll;
      .bookInfo {
        display: flex;
        width: 100%;
        padding: 10px;
        height: 300px;
        border-bottom: 2px solid #ffffff;
        .bookImg {
          width: 30%;
          align-self: center;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.3);
          height: 200px;
          border-radius: 15px;
          margin-right: 5px;
          img {
            width: 90%;
            height: 90%;
            display: block;
          }
        }
        .text {
          position: relative;
          width: calc(100% - 45%);
          height: 100%;
          background-color: #fff;
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
              display: block;
              margin-bottom: 20px;
              /* white-space: nowrap; */
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
          .add {
            ${addButton}
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            .delete {
            }
            button {
              width: 77px;
              height: 52px;
            }
          }
          .addSch {
            ${addButton}
            display: grid;
            button {
              width: 77px;
              height: 52px;
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
