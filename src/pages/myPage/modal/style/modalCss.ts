import styled from "styled-components";
import { bigsize, defaltsize, midllesize } from "utils/FontSize";

const ModalCss = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  .modal {
    height: 36.46vw;
    width: 36.46vw;
    border-radius: 15px;
    background-color: #fff;
    animation: modal-show 0.5s;
    overflow: hidden;
    header {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 10%;
      background: #f1f1f1;
      p {
        font-size: ${bigsize};
        font-weight: 600;
      }
      button {
        cursor: pointer;
        border: none;
        position: absolute;
        right: 3%;
        top: 50%;
        transform: translateY(-50%);
        font-size: x-large;
      }
    }
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 90%;
      .fixPic {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1vw 4vw;
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 18.23vw;
          .profilePic {
            width: 10.4167vw;
            height: 10.4167vw;
            background: yellow;
            border-radius: 100%;
            margin: 0.52vw 0;
          }
          button {
            cursor: pointer;
            border: 0;
            border-radius: 10px;
            width: 6.25vw;
            height: 1.5vw;
            margin: 0.52vw 0;
            font-size: ${defaltsize};
            span {
              margin: 2px;
            }
          }
        }
      }
      .fixNickName {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1vw 4vw;
        input {
          border: 0;
          border-bottom: 1px solid;
          height: 3.125vw;
          width: 18.23vw;
          font-size: ${defaltsize};
          text-align: center;
          margin: 5px 0;
          padding-left: 0.52vw;
        }
      }
      .edit {
        cursor: pointer;
        width: 6.25vw;
        height: 3.125vw;
        border: 0;
        border-radius: 15px;
        font-weight: 600;
        font-size: ${midllesize};
      }
    }
  }
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -100px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

export default ModalCss;
