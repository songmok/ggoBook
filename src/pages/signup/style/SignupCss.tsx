import styled from "styled-components";

import { defaltsize, headertitle } from "utils/FontSize";

const SignupCss = styled.section`
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 36.4583vw;
  .title {
    text-align: center;
    margin: 30px 0;
    .logo {
      font-size: ${headertitle};
      font-weight: 600;
    }
    .slogan {
      font-size: ${defaltsize};
      color: #bbbbbb;
    }
  }
  .orBt {
    font-size: 20px;
    .on {
      font-weight: 600;
    }
  }
  .lineBox {
    position: relative;
    font-size: 20px;
    font-weight: 600;
    width: 100%;
    text-align: center;
    margin: 20px 0;
    .or {
      ::before {
        content: "";
        width: 13.0208vw;
        height: 2px;
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        background: #000000;
      }
      ::after {
        content: "";
        width: 13.0208vw;
        height: 2px;
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        background: #000000;
      }

    }
  }
  .kakao {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: 12px;

    height: 4.6875vw;
    width: 100%;
    margin: 10px 0px;
    color: #3a2929;
    font-size: 25px;
    font-weight: 600;
    img {
      height: 90%;
      width: 4.1667vw;

      margin-right: 10px;
    }
  }
  .naver {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: 12px;
    background-color: #03c75a;
    height: 4.6875vw;
    width: 100%;
    margin: 10px 0px;
    color: #ffffff;
    font-size: 25px;
    font-weight: 600;
    img {
      height: 90%;
      width: 4.1667vw;
      margin-right: 10px;
    }
  }
`;

export default SignupCss;
