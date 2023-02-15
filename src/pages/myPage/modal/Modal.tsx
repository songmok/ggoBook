import ModalCss from "./style/modalCss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

type Props = {
  closeModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Modal = (props: Props) => {
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
            <div className="profilePic">
              <button>불러오기</button>
            </div>
            <button>수정</button>
          </div>
          <div className="fixNickName">
            <form>
              <input />
            </form>
            <button>수정</button>
          </div>
        </section>
      </div>
    </ModalCss>
  );
};

export default Modal;
