import React from "react";
import MyPageCss from "./style/MypageCss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const MyPage = () => {
  return (
    <MyPageCss>
      <div className="profile">
        <div className="profileTop">
          <div className="profilePic"></div>
          <div>
            <p>오한수</p>
            <p>포인트</p>
            <p>독서 랭킹</p>
          </div>
        </div>
        <div className="profileBottom">
          <div className="profileBts">
            <button className="profileBt">프로필 수정</button>
            <button className="profileBt">완독서 관리</button>
          </div>
        </div>
      </div>
      <div className="record">
        <p>기록</p>
        <div>
          <ul className="records">
            <li>
              <span>
                <FontAwesomeIcon icon={faBook} size="2x" />
              </span>
              <span>읽은 책</span>
              <span>0</span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faFileLines} size="2x" />
              </span>
              <span>페이지 수 </span>
              <span>0</span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faPencil} size="2x" />
              </span>
              <span>독후감</span>
              <span>0</span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faStar} size="2x" />
              </span>
              <span>평점</span>
              <span>0</span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faClock} size="2x" />
              </span>
              <span>독서일</span>
              <span>0</span>
            </li>
          </ul>
        </div>
      </div>
    </MyPageCss>
  );
};

export default MyPage;
