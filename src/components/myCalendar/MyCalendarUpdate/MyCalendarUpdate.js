import instance from "api/instance";
import request from "api/request";
import DatePicker from "react-date-picker";
import Modal from "react-modal";
import { Button } from "utils/repeatCss";
import {
  FormCss,
  FormModalCss,
} from "../myCalendarModal/style/AppointFormStyles";
import { UpdateModalCss } from "./style/UpdateModalCss";

const MyCalendarUpdate = ({
  modalData,
  listIng,
  updateModal,
  start,
  end,
  uiSeq,
  register,
  handleSubmit,
  setEnd,
  setStart,
  updateModalOpen,
  updateModalClose,
  ing,
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
  console.log("ing:", ing);
  const scheduleUpdate = async (data) => {
    let updateAppointmentInfo = {
      ...data,
      id: modalData.id,
      start: start,
      end: end,
    };
    await instance
      .post(request.scheduleUpdate, updateAppointmentInfo)
      .then((res) => {
        console.log("updatelist", res);
        listIng();
      })
      .catch((err) => {
        console.log(err);
      });
    setStart(new Date());
    setEnd(new Date());
    updateModalClose();
  };
  console.log("bb", modalData);
  return (
    <>
      <FormModalCss>
        {updateModal && (
          <Modal
            isOpen={updateModal}
            onRequestClose={updateModalClose}
            ariaHideApp={false}
            style={customModalStyles}
          >
            <button onClick={updateModalClose} className="dks">
              X
            </button>
            <UpdateModalCss onSubmit={handleSubmit(scheduleUpdate)}>
              <div className="header">
                <h2>{modalData.title}</h2>
              </div>
              <ul>
                <li className="dateWrap">
                  <span className="dateHead">시작 날</span>
                  <span>{modalData.start}</span>
                  <span className="dateHead">마지막 날</span>
                  <span>{modalData.end}</span>
                </li>
                <li>
                  <span className="dateUpdate">수정할 시작 날</span>
                  <DatePicker
                    onChange={setStart}
                    value={start}
                    format="y-MM-d"
                  />
                  <span className="dateUpdate">수정할 마지막 날</span>
                  <DatePicker onChange={setEnd} value={end} format="y-MM-d" />
                </li>
                <li className="descWrap">
                  <label>기록란</label>
                  <textarea
                    className="desc"
                    name="siContent"
                    required
                    {...register("siContent", {
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
            </UpdateModalCss>
          </Modal>
        )}
      </FormModalCss>
    </>
  );
};

export default MyCalendarUpdate;
