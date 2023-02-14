import React from "react";
import Form from "components/common/form/Form";
import { useNavigate } from "react-router-dom";
import LoginCss from "./style/LoginCss";
import kakao from "../../assets/images/kakao.png";
import naver from "../../assets/images/naver.png";
const Login = () => {
  const navigate = useNavigate();
  const goLogin = () => {
    navigate("/login");
  };
  const goSignup = () => {
    navigate("/signup");
  };
  return (
    <LoginCss>
      <div>
        <p>project_SB</p>
        <p>한스의 캘린더</p>
      </div>
      <div>
        <span onClick={goLogin}>로그인</span> or
        <span onClick={goSignup}>등록</span>
      </div>
      <Form />
      <span className="line">OR</span>
      <button className="kakao">
        <img src={kakao} alt="카카오 로그인" />
        <span>카카오 로그인</span>
      </button>
      <button className="naver">
        <img src={naver} alt="네이버 로그인" />
        <span>네이버 로그인</span>
      </button>
    </LoginCss>
  );
};
export default Login;
