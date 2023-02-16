import ModalCss from "./style/modalCss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";

type Props = {
  closeModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Modal = (props: Props) => {
  const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    // SetEditName(e);
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
              <div className="profilePic"></div>
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
            <button className="edit">수정</button>
          </div>
        </section>
      </div>
    </ModalCss>
  );
};

export default Modal;
