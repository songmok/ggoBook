import React, { useEffect, useState } from "react";
import MyPageCss from "./style/MypageCss";
import Modal from "./modal/Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer/store";
import { KAKAO_LOGOUT } from "OAuth";

import profile from "../../assets/images/profile.png";
import instance from "api/instance";
import request from "api/request";
import { logoutUser } from "reducer/userSlice";
import axios from "axios";
import downloadFiles from "api/download";

interface userData {
  nickName: string;
  userImg: string | null;
  userPoint: number;
  userRank: number;
}

const MyPage = () => {
  const uiSeq: number = useSelector((state: RootState) => state.user.uiSeq);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<userData | null>(null);
  const [imageURL, setImageURL] = useState<string>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    setModalOpen(true);
  };

  const closeModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    setModalOpen(false);
  };

  const goToComplete = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate("/complete");
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
  //       alert("한수짱");
  //       navigate("/login");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert("한수실패");
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
            console.log(res.data);
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
  }, []);

  const logout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      dispatch(logoutUser());
      navigate("/login");
    } else {
      alert("취소 ㅋ");
    }
  };

  return (
    <MyPageCss>
      <a href={KAKAO_LOGOUT}>카카오로그아웃</a>
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
            <p className="nickName">{userInfo?.nickName} 님</p>
            <p className="point">
              포인트 <span>{userInfo?.userPoint}pt</span>
            </p>
            <p className="rank">
              나의 독서 랭킹 <span>{userInfo?.userRank}등</span>
            </p>
          </div>
        </div>
        <div className="profileBottom">
          <div>
            <button className="profileBt" onClick={openModal}>
              프로필 수정
            </button>
            <button className="profileBt" onClick={goToComplete}>
              완독서 관리
            </button>
            <button className="profileBt" onClick={logout}>
              로그아웃
            </button>
          </div>
        </div>
        {modalOpen === true ? (
          <Modal
            closeModal={closeModal}
            userInfo={userInfo}
            uiSeq={uiSeq}
            imageURL={imageURL}
          />
        ) : null}
      </div>
      <div className="record">
        <p className="title">기록</p>
        <div>
          <ul className="records">
            <li>
              <span className="icon">
                <FontAwesomeIcon icon={faBook} size="2x" />
              </span>
              <span>읽은 책</span>
              <span className="count">0</span>
            </li>
            <li>
              <span className="icon">
                <FontAwesomeIcon icon={faFileLines} size="2x" />
              </span>
              <span>페이지 수 </span>
              <span className="count">0</span>
            </li>
            <li>
              <span className="icon">
                <FontAwesomeIcon icon={faPencil} size="2x" />
              </span>
              <span>독후감</span>
              <span className="count">0</span>
            </li>
            <li>
              <span className="icon">
                <FontAwesomeIcon icon={faStar} size="2x" />
              </span>
              <span>평점</span>
              <span className="count">0</span>
            </li>
            <li>
              <span className="icon">
                <FontAwesomeIcon icon={faClock} size="2x" />
              </span>
              <span>독서일</span>
              <span className="count">0</span>
            </li>
          </ul>
        </div>
      </div>
    </MyPageCss>
  );
};

export default MyPage;
