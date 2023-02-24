import FormCss from "./style/FormCss";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import instance from "api/instance";
import request from "api/request";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "reducer/userSlice";

// types
type LoginType = {
  uiEmail: string;
  uiPwd: string;
};

const schema = yup.object({
  uiPwd: yup.string().required("비밀번호는 8 - 16 글자로 입력해주세요"),
  uiEmail: yup.string().email().required("이메일을 입력해주세요"),
});

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: yupResolver(schema),
  });

  const submit: SubmitHandler<LoginType> = (body) => {
    window.location.pathname === "/signup" &&
      instance.put(request.join, body).then((res) => {
        if (res.data.status === false) {
          alert(res.data.message);
        } else {
          alert(res.data.message);
          navigate("/login");
        }
      });
    window.location.pathname === "/login" &&
      instance
        .post(request.login, body)
        .then((res) => {
          if (res.data.status === false) {
            alert(res.data.message);
          } else {
            const uiSeq = res.data.uiSeq;
            dispatch(loginUser({ uiSeq: uiSeq, type: "normal" }));
            navigate("/myPage");
          }
        })
        .catch((err) => {
          alert(err.response.message);
        });
  };

  return (
    <FormCss>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="email" />
        <input
          className="input"
          id="email"
          type="email"
          placeholder="이메일 주소"
          {...register("uiEmail")}
        />
        <p className="error">{errors.uiEmail?.message}</p>
        <label htmlFor="password" />
        <input
          className="input"
          id="password"
          type="password"
          placeholder="8-16자리 비밀번호"
          minLength={8}
          maxLength={16}
          {...register("uiPwd")}
        />
        <p className="error">{errors.uiPwd?.message}</p>
        {window.location.pathname === "/login" && (
          <button className="submit" type="submit">
            로그인
          </button>
        )}
        {window.location.pathname === "/signup" && (
          <>
            <div className="agree">
              서비스를 이용하므로써 이용 약관 및 개인 정보 보호 정책 에 동의하는
              것으로 간주됩니다
            </div>
            <button className="submit" type="submit">
              회원가입
            </button>
          </>
        )}
      </form>
    </FormCss>
  );
};

export default Form;
