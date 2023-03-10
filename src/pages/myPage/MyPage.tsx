import React, { useEffect, useState } from "react";
import MyPageCss from "./style/MypageCss";
import Modal from "./modal/Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer/store";
import { KAKAO_LOGOUT } from "OAuth";
import { CLIENT_ID } from "OAuth";
import { CLIENT_SECRET } from "OAuth";

import profile from "../../assets/images/profile.png";
import instance from "api/instance";
import request from "api/request";
import { logoutUser } from "reducer/userSlice";
import downloadFiles from "api/download";
import axios from "axios";

export interface IUserData {
  nickName: string;
  userImg: string | null;
  userPoint: number;
  userRank: number;
  userBook: number;
  userPage: number;
  userArticle: number;
  userOneComment: number;
  userDays: number;
}

const MyPage = () => {
  const uiSeq = useSelector((state: RootState) => state.user.uiSeq);
  const type = useSelector((state: RootState) => state.user.type);
  const token = useSelector((state: RootState) => state.user.token);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<IUserData | null>(null);
  const [imageURL, setImageURL] = useState<string>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [change, setChange] = useState<boolean>(true);

  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    setModalOpen(true);
  };

  const closeModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    setModalOpen(false);
  };

  const goToComplete = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate("/complete");
  };

  const alarm = () => {
    setChange(!change);
  };

  // const logout = () => {
  //   axios({
  //     method: "post",
  //     url: "https://kapi.kakao.com/v1/user/logout",
  //     headers: {
  //       Authorization: `Bearer ${ACCESS_TOKEN}`,
  //     },
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       alert("?????????");
  //       navigate("/login");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert("????????????");
  //     });
  // };

  const userData = async () => {
    const params = {
      uiSeq: uiSeq,
    };
    instance.get(request.info, { params: params }).then((res) => {
      setUserInfo(res.data);
      const userImg = res.data.userImg;
      res.data.userImg !== null &&
        downloadFiles
          .get(`http://192.168.0.160:8520/api/download/user/${userImg}`)
          .then((res) => {
            const newFile = res.data;
            const reader = new FileReader(); // 1
            reader.onload = (e) => {
              const previewImage = String(e.target?.result);
              setImageURL(previewImage); // 2
            };
            reader.readAsDataURL(newFile); // 3
          });
    });
  };

  useEffect(() => {
    userData();
  }, [change]);

  const logout = () => {
    if (window.confirm("???????????? ???????????????????")) {
      dispatch(logoutUser());
      navigate("/login");
    } else {
      alert("?????????????????????.");
    }
  };

  const kakaoLogout = () => {
    if (window.confirm("???????????? ???????????????????")) {
      dispatch(logoutUser());
      document.location.href = KAKAO_LOGOUT;
    } else {
      alert("?????????????????????.");
    }
  };

  const naverLogout = () => {
    if (window.confirm("???????????? ???????????????????")) {
      axios({
        url: `naver/oauth2.0/token`,
        params: {
          grant_type: "delete",
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          access_token: token,
          service_provider: "NAVER",
        },
      }).then((res) => {
        dispatch(logoutUser());
        navigate("/login");
      });
    }
  };

  return (
    <MyPageCss>
      <div className="profile">
        <div className="profileTop">
          <div className="profilePic">
            {userInfo?.userImg === null ? (
              <img src={profile} alt="img" />
            ) : (
              <img src={imageURL} alt="img" />
            )}
          </div>
          <div>
            <p className="nickName">{userInfo?.nickName} ???</p>
            <p className="point">
              ????????? <span>{userInfo?.userPoint}pt</span>
            </p>
            <p className="rank">
              ?????? ?????? ?????? <span>{userInfo?.userRank}???</span>
            </p>
          </div>
        </div>
        <div className="profileBottom">
          <div>
            <button className="profileBt" onClick={openModal}>
              ????????? ??????
            </button>
            <button className="profileBt" onClick={goToComplete}>
              ????????? ??????
            </button>
            {type === "kakao" ? (
              <button className="profileBt" onClick={kakaoLogout}>
                ????????? ????????????
              </button>
            ) : type === "naver" ? (
              <button className="profileBt" onClick={naverLogout}>
                ????????? ????????????
              </button>
            ) : (
              <button className="profileBt" onClick={logout}>
                ????????????
              </button>
            )}
          </div>
        </div>
        {modalOpen === true ? (
          <Modal
            closeModal={closeModal}
            alarm={alarm}
            userInfo={userInfo}
            uiSeq={uiSeq}
            imageURL={imageURL}
          />
        ) : null}
      </div>
      <div className="record">
        <p className="title">??????</p>
        <div>
          <ul className="records">
            <li>
              <span className="icon">
                <FontAwesomeIcon icon={faBook} size="2x" />
              </span>
              <span>?????? ???</span>
              <span className="count">{userInfo?.userBook}</span>
            </li>
            <li>
              <span className="icon">
                <FontAwesomeIcon icon={faFileLines} size="2x" />
              </span>
              <span>????????? ??? </span>
              <span className="count">{userInfo?.userPage}</span>
            </li>
            <li>
              <span className="icon">
                <FontAwesomeIcon icon={faPencil} size="2x" />
              </span>
              <span>?????????</span>
              <span className="count">{userInfo?.userArticle}</span>
            </li>
            <li>
              <span className="icon">
                <FontAwesomeIcon icon={faStar} size="2x" />
              </span>
              <span>??????</span>
              <span className="count">{userInfo?.userOneComment}</span>
            </li>
            <li>
              <span className="icon">
                <FontAwesomeIcon icon={faClock} size="2x" />
              </span>
              <span>??????</span>
              <span className="count">{userInfo?.userDays}</span>
            </li>
          </ul>
        </div>
      </div>
    </MyPageCss>
  );
};

export default MyPage;
