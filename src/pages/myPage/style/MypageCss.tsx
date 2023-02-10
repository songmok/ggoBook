import styled from "styled-components";

const MyPageCss = styled.section`
  .profile {
    .profileTop {
      display: flex;
      justify-content: center;
      flex-direction: row;
      .profilePic {
        width: 10.4167vw;
        height: 10.4167vw;
        background: yellow;
        border-radius: 100%;
      }
    }
    .profileBottom {
      display: flex;
      justify-content: center;
      .profileBt {
        border: none;
        border-radius: 15px;
        width: 9.375vw;
        height: 2.6042vw;
        background: #bbb;
        :hover {
          background: yellow;
        }
      }
    }
  }
  .record {
    text-align: center;
  }
  .records {
    display: flex;
    justify-content: center;
  }
`;

export default MyPageCss;
