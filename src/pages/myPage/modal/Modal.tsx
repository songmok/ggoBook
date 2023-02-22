import ModalCss from "./style/modalCss";

import profile from "../../../assets/images/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import instance from "api/axios";
import request from "api/request";
import { useState } from "react";

type Props = {
  closeModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userInfo: userData | null;
  uiSeq: number;
};

interface userData {
  nickName: string;
  userImg: string | null;
  userPoint: number;
  userRank: number;
}

const Modal = (props: Props) => {
  const [editName, setEditName] = useState<string>("");
  const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditName(e.target.value);
  };

  const updateName = () => {
    const params = {
      uiSeq: props.uiSeq,
    };
    const data = {
      uiNickname: editName,
    };
    instance.patch(request.updateName, data, { params: params }).then((res) => {
      console.log(res);
    });
  };

  return (
    <ModalCss>
      <div className="modal">
        <header>
          <p>프로필 수정</p>
          <button onClick={props.closeModal}>
            <FontAwesomeIcon icon={faX} />
          </button>
        </header>
        <section>
          <div className="fixPic">
            <div>
              <div className="profilePic">
                {props.userInfo?.userImg === null ? (
                  <img src={profile} alt="img" />
                ) : (
                  <img src={props.userInfo?.userImg} alt="img" />
                )}
              </div>
              <button>
                <FontAwesomeIcon icon={faImage} />
                <span>불러오기</span>
              </button>
            </div>
            <button className="edit">수정</button>
          </div>
          <div className="fixNickName">
            <form>
              <input
                type="text"
                placeholder="변경할 닉네님을 8자 이내로 적어주세요"
                onChange={nameChange}
              />
            </form>
            <button className="edit" onClick={updateName}>
              수정
            </button>
          </div>
        </section>
      </div>
    </ModalCss>
  );
};

export default Modal;
