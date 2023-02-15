import Form from "components/common/form/Form";
import { useNavigate } from "react-router-dom";
import LoginCss from "./style/LoginCss";
import kakao from "../../assets/images/kakao.png";
import naver from "../../assets/images/naver.png";

const Login = () => {
  const navigate = useNavigate();

  const goSignup = () => {
    navigate("/signup");
  };

  return (
    <LoginCss>
      <div className="title">
        <p className="logo">Project_SB</p>
        <p className="slogan">한스의 캘린더</p>
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
