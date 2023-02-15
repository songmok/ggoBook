import styled from "styled-components";
import { bigsize, headertitle, midllesize } from "utils/FontSize";

const MyPageCss = styled.section`
  padding: 3%;
  .profile {
    margin: 1.0417vw 0 2.6042vw 0;
    .profileTop {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      .profilePic {
        width: 10.4167vw;
        height: 10.4167vw;
        background: yellow;
        border-radius: 100%;
        margin-right: 50px;
      }
      .nickName {
        font-size: ${headertitle};
        margin-bottom: 10px;
      }
      .point {
        font-size: ${midllesize};
        margin-bottom: 10px;
        span {
          font-weight: 600;
        }
      }
      .rank {
        font-size: ${bigsize};
        margin-bottom: 10px;
        color: red;
        span {
          font-weight: 600;
          color: #000000;
        }
      }
    }
    .profileBottom {
      display: flex;
      justify-content: center;
      margin: 20px 0;
      .profileBt {
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
  .record {
    text-align: center;
    .title {
      font-size: ${headertitle};
      margin: 20px 0;
    }
    .records {
      display: flex;
      justify-content: center;
      li {
        margin: 10px 5vw;
        display: flex;
        flex-direction: column;
        span {
          font-size: ${bigsize};
        }
        .icon {
          font-size: 30px;
          margin: 1.5625vw;
        }
        .count {
          font-weight: 600;
          margin-top: 10px;
        }
      }
    }
  }
`;

export default MyPageCss;