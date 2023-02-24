import { useState } from "react";
import DatePicker from "react-date-picker";
import Modal from "react-modal";
import axios from "axios";

import { FormModalCss } from "./style/AppointFormStyles";

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
    // Reset react-hook-form states
    // reset();
    // Reset date picker and time picker
    // setStartDateTime(new Date());
    // setEndDateTime(new Date());
    closeModal();
  };
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <ul>
                <li>
                  <h2>{modalData.biName}</h2>
                </li>
                <li>
                  <span>일정</span>
                  <DatePicker
                    onChange={setStart}
                    value={start}
                    dateFormat={"yy-MM-dd"}
                  />
                  <DatePicker
                    onChange={setEnd}
                    value={end}
                    dateFormat={"yy-MM-dd"}
                  />
                </li>
                <li>
                  <label>기록</label>
                  <input
                    name="description"
                    type="text"
                    placeholder="기록하기"
                    required
                    {...register("description", {
                      required: true,
                      maxLength: 300,
                    })}
                  />
                </li>
                <li>
                  <button type="submit">
                    <span>Add To Calendar</span>
                  </button>
                </li>
              </ul>
            </form>
          </Modal>
        )}
      </FormModalCss>
    </>
  );
};

export default MyCalendarModal;
