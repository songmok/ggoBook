import instance from "api/instance";
import request from "api/request";
import moment from "moment";
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
  reset,
  customModalStyles,
}) => {
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
    reset();
  };

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
                <img src={modalData.biUri} alt={modalData.title} />
              </div>
              <ul>
                <li className="dateWrap">
                  <div className="dates">
                    <span className="dateHead">기존 시작 날</span>
                    <span className="str">{modalData.start}</span>
                    <span className="dateHead">기존 마지막 날</span>
                    <span className="str">{modalData.end}</span>
                  </div>
                </li>
                <li className="fixWrap">
                  <span className="dateUpdate">수정할 시작 날</span>
                  <DatePicker
                    onChange={setStart}
                    value={start}
                    format="y-MM-d"
                  />
                  <span className="dateUpdate">수정할 마지막 날</span>
                  <DatePicker
                    onChange={(e) => {
                      let tomo = new Date(e);
                      e = moment(tomo).format("YYYY-MM-DD");
                      let dates = new Date(e);
                      setEnd(dates);
                    }}
                    value={end}
                    format="y-MM-d"
                  />
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
