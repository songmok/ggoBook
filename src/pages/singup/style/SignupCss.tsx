import styled from "styled-components";

const SignupCss = styled.section`
  .line {
    position: relative;
    width: 100px;
    height: 100px;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100px;
      height: 10px;
      background: #3a2929;
    }
    &::before {
      width: 100px;
      height: 10px;
      background: #3a2929;
    }
  }
  .kakao {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: 12px;
    background-color: #fddc3f;
    height: 90px;
    width: 40%;
    margin: 10px 0px;
    color: #3a2929;
    font-size: 25px;
    font-weight: 600;
    img {
      height: 80px;
      width: 80px;
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
    height: 90px;
    width: 40%;
    margin: 10px 0px;
    color: #ffffff;
    font-size: 25px;
    font-weight: 600;
    img {
      height: 80px;
      width: 80px;
      margin-right: 10px;
    }
  }
`;

export default SignupCss;
