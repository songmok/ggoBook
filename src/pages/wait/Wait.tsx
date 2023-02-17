import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REST_API_KEY } from "OAuth";
import { useLocation } from "react-router-dom";
import axios from "axios";

type Props = {};

const Wait = (props: Props) => {
  const navigate = useNavigate();

  // 카카오 로그인 정보받아오기

  const [ACCESS_TOKEN, setACCESS_TOKEN] = useState<string>("");
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const AUTH_CODE = params.get("code");

  const fetchKakao = async () => {
    const body = `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${AUTH_CODE}`;
    await axios
      .post(`https://kauth.kakao.com/oauth/token`, body)
      .then((res) => {
        setACCESS_TOKEN(res.data.access_token);
      })
      .then(() => {
        kakaoData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchNaver = async () => {
    await axios({
      method: "get",
      url: "naver/oauth2.0/token",
      params: {
        grant_type: `authorization_code`,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: AUTH_CODE,
        state: `NaverLogin`,
      },
    })
      .then((res) => {
        setACCESS_TOKEN(res.data.access_token);
      })
      .then(() => {
        console.log(ACCESS_TOKEN);
        naverData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const naverData = () => {
    console.log(ACCESS_TOKEN);
    axios({
      method: "get",
      url: "openapi/v1/nid/me",
      headers: {
        Authorization: `bearer ${ACCESS_TOKEN}`,
      },
    })
      .then((res) => {
        console.log(res);
        alert("한수불러오기 성공");
      })
      .catch((err) => {
        console.log(err);
        alert("한수불러오기 실패");
      });
  };

  const kakaoData = async () => {
    await axios({
      method: "get",
      url: "https://kapi.kakao.com/v2/user/me",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
      .then((res) => {
        console.log(res);
        alert("한수불러오기 성공");
      })
      .catch((err) => {
        console.log(err);
        alert("한수불러오기 실패");
      });
  };

  useEffect(() => {
    fetchKakao();
  }, []);

  return <div>로그인중입니다!</div>;
};

export default Wait;
