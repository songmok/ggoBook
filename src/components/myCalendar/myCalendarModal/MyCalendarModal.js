import DatePicker from "react-date-picker";
import Modal from "react-modal";
import axios from "axios";
import moment from "moment";

import { FormCss, FormModalCss } from "./style/AppointFormStyles";
import { Button } from "utils/repeatCss";

const MyCalendarModal = ({
  closeModal,
  modalOpen,
  modalData,
  setEnd,
  end,
  start,
  setStart,
  handleSubmit,
  register,
  uiSeq,
}) => {
  const customModalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "50%",
      height: "500px",
      transform: "translate(-50%, -50%)",
    },
    overlay: { zIndex: 1000 },
  };

  // Open Modal Function
  const onSubmit = (data) => {
    const appointmentInfo = {
      ...data,
      biSeq: modalData.biSeq,
      start: start,
      end: end,
      uiSeq: uiSeq,
    };
    axios
      .post("http://192.168.0.160:8520/api/schedule/add", appointmentInfo)
      .then((res) => {
        console.log(res.data);
        console.log(appointmentInfo);
      })
      .catch((err) => {
        console.log(err);
        closeModal();
      });
    setStart(new Date());
    setEnd(new Date());
    closeModal();
  };
  console.log(modalData);
  return (
    <>
      <FormModalCss>
        {modalOpen && (
          <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            style={customModalStyles}
          >
            <button onClick={closeModal} className="dks">
              X
            </button>
            <FormCss onSubmit={handleSubmit(onSubmit)}>
              <div className="header">
                <h2>{modalData.biName}</h2>
                <img src={modalData.bimgUri} alt="" />
              </div>
              <ul>
                <li className="dateWrap">
                  <span className="dateHead">시작 날</span>
                  <DatePicker
                    onChange={setStart}
                    value={start}
                    format="y-MM-d"
                  />
                  <span className="dateHead">마지막 날</span>

                  <DatePicker
                    onChange={(e) => {
                      let tomo = new Date(e);
                      e = moment(tomo).format("YYYY-MM-DD");
                      let dates = new Date(e);
                      setEnd(dates);
                    }}
                    value={end}
                  />
                </li>
                <li className="descWrap">
                  <label>기록란</label>
                  <textarea
                    className="desc"
                    name="description"
                    required
                    {...register("description", {
                      required: true,
                      maxLength: 300,
                    })}
                  ></textarea>
                  <Button className="submit">
                    <button className="save" type="submit">
                      저장하기
                    </button>
                  </Button>
                </li>
              </ul>
            </FormCss>
          </Modal>
        )}
      </FormModalCss>
    </>
  );
};

export default MyCalendarModal;
