import Form from "components/common/form/Form";
import { useNavigate } from "react-router-dom";
import SignupCss from "./style/SignupCss";

const Signup = () => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate("/login");
  };

  return (
    <SignupCss>
      <div className="title">
        <p className="logo">꼬북꼬북</p>
        <p className="slogan">나의 북스케줄</p>
      </div>
      <div className="orBt">
        <span onClick={goLogin}>로그인</span>
        <span> 또는 </span>
        <span className="on">등록</span>
      </div>
      <Form />
      {/* <div className="lineBox">
        <span className="or"> 또는 </span>
      </div>
      <button className="kakao">
        <img src={kakao} alt="카카오로 시작" />
        <span>카카오로 시작하기</span>
      </button>
      <button className="naver">
        <img src={naver} alt="네이버로 시작" />
        <span>네이버로 시작하기</span>
      </button> */}
    </SignupCss>
  );
};

export default Signup;
