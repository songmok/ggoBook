import styled from "styled-components";

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
    animation: modal-show 0.3s;
    overflow: hidden;
    header {
      position: relative;
      width: 100%;
      height: 10%;
      background: #f1f1f1;
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
      .fixPic {
        display: flex;
        .profilePic {
          width: 10.4167vw;
          height: 10.4167vw;
          background: yellow;
          border-radius: 100%;
          margin-right: 50px;
        }
      }
      .fixNickName {
        display: flex;
      }
    }
  }
`;

export default ModalCss;
