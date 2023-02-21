import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REST_API_KEY } from "OAuth";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "reducer/userSlice";

type Props = {};

const Wait = (props: Props) => {
  interface info {
    snsUid: string;
    type: string;
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const AUTH_CODE = params.get("code");

  const kakaoLogin = async () => {
    await axios({
      method: "post",
      url: "https://kauth.kakao.com/oauth/token",
      params: {
        grant_type: `authorization_code`,
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code: AUTH_CODE,
      },
    })
      .then((res) => {
        const token = res.data.access_token;
        axios({
          method: "get",
          url: "https://kapi.kakao.com/v2/user/me",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            const kakaoID = res.data.id;
            axios({
              method: "post",
              url: "http://192.168.0.160:8520/api/user/sns/login",
              data: {
                snsUid: kakaoID,
                type: "kakao",
              },
            })
              .then((res) => {
                const uiSeq = res.data.uiSeq;
                dispatch(loginUser(uiSeq));
                navigate("/myPage");
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const naverLogin = async () => {
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
        const token = res.data.access_token;
        axios({
          method: "get",
          url: "openapi/v1/nid/me",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            const naverID = res.data.response.id;
            axios({
              method: "post",
              url: "http://192.168.0.160:8520/api/user/sns/login",
              data: {
                snsUid: naverID,
                type: "naver",
              },
            })
              .then((res) => {
                const uiSeq = res.data.uiSeq;
                dispatch(loginUser(uiSeq));
                navigate("/myPage");
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    kakaoLogin();
    naverLogin();
  }, []);

  return <div>로그인중입니다!</div>;
};

export default Wait;
