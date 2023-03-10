import Form from "components/common/form/Form";
import { useNavigate } from "react-router-dom";
import LoginCss from "./style/LoginCss";
import kakao from "../../assets/images/kakao.png";
import naver from "../../assets/images/naver.png";
import { KAKAO_URL, NAVER_URL } from "OAuth";

const Login = () => {
  const navigate = useNavigate();

  const goSignup = () => {
    navigate("/signup");
  };

  return (
    <LoginCss>
      <div className="title">
        <p className="logo">꼬북꼬북</p>
        <p className="slogan">나의 북스케줄</p>
      </div>
      <div className="orBt">
        <span className="on">로그인</span>
        <span> 또는 </span>
        <span onClick={goSignup}>등록</span>
      </div>
      <Form />
      <div className="lineBox">
        <span className="or"> 또는 </span>
      </div>
      <a href={KAKAO_URL} className="kakao">
        <img src={kakao} alt="카카오로 시작하기" />
        <span>카카오로 시작하기</span>
      </a>
      <a href={NAVER_URL} className="naver">
        <img src={naver} alt="네이버로 시작하기" />
        <span>네이버로 시작하기</span>
      </a>
    </LoginCss>
  );
};

export default Login;
