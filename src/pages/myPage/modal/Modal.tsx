import ModalCss from "./style/modalCss";

import profile from "../../../assets/images/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import instance from "api/instance";
import request from "api/request";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IUserData } from "../MyPage";

interface IProps {
  closeModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
  alarm: () => void;
  userInfo: IUserData | null;
  uiSeq: number;
  imageURL: string;
}

const Modal = (props: IProps) => {
  const navigate = useNavigate();
  const [imgFile, setImgFile] = useState<any>(null);
  const [editName, setEditName] = useState<string>("");
  const imgRef = useRef<any>(null);
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
      if (res.data.status === false) {
        alert(res.data.message);
      } else {
        alert(res.data.message);
        props.alarm();
      }
    });
  };

  const leave = () => {
    const params = {
      uiSeq: props.uiSeq,
    };
    if (window.confirm("정말 탈퇴하시겠습니까?")) {
      instance.patch(request.leave, null, { params: params }).then((res) => {
        alert("탈퇴처리 되었습니다.");
        navigate("/signup");
      });
    } else {
      alert("취소되었습니다.");
    }
  };

  const handleChangeFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  const updateImg = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("uiSeq", props.uiSeq.toString());
    formData.append("img", imgRef.current.files[0]);
    axios({
      method: "put",
      url: "http://192.168.0.160:8520/api/user/update/photo",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      console.log(res);
      alert("프로필 사진 수정이 완료되었습니다.");
      props.alarm();
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
                {props.imageURL === "" ? (
                  <img src={imgFile ? imgFile : profile} alt="profile img" />
                ) : (
                  <img
                    src={imgFile ? imgFile : props.imageURL}
                    alt="porfile img"
                  />
                )}
              </div>
              <form>
                {/* <FontAwesomeIcon icon={faImage} /> */}
                <input
                  type="file"
                  className="imgFile"
                  id="imgFile"
                  onChange={handleChangeFile}
                  ref={imgRef}
                />
              </form>
            </div>
            <button className="edit" onClick={updateImg}>
              수정
            </button>
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
          <button className="edit" onClick={leave}>
            회원탈퇴
          </button>
        </section>
      </div>
    </ModalCss>
  );
};

export default Modal;
