import React, { useState } from "react";
import MyPageCss from "./style/MypageCss";
import Modal from "./modal/Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const MyPage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    setModalOpen(true);
  };

  const closeModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    setModalOpen(false);
  };

  return (
    <MyPageCss>
      <div className="profile">
        <div className="profileTop">
          <div className="profilePic"></div>
          <div>
            <p className="nickName">오한수리남</p>
            <p className="point">
              포인트 <span>1557pt</span>
            </p>
            <p className="rank">
              나의 독서 랭킹 <span>999등</span>
            </p>
          </div>
        </div>
        <div className="profileBottom">
          <div>
            <button className="profileBt" onClick={openModal}>
              프로필 수정
            </button>
            <button className="profileBt">완독서 관리</button>
          </div>
        </div>
        {modalOpen === true ? <Modal closeModal={closeModal} /> : null}
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
