import React from "react";
import LoginCss from "./style/LoginCss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// types
type LoginType = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(8)
    .max(16)
    .required("Password must be 8 - 16 characters"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: yupResolver(schema),
  });

  const submit = () => {
    console.log("제출확인");
  };

  return (
    <LoginCss>
      <div>
        <p>project_SB</p>
        <p>한스의 캘린더</p>
      </div>
      <div>
        <span>로그인</span> or <span>등록</span>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          placeholder="이메일 주소"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          placeholder="8~16자리 비밀번호"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
        <button type="submit">로그인</button>
      </form>
    </LoginCss>
  );
};

export default Login;
