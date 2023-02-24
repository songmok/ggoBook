import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-date-picker";
import moment from "moment";
import { useSelector } from "react-redux";
import uuid from "react-uuid";
import Modal from "react-modal";
import axios from "axios";
import FormCss from "components/common/form/style/FormCss";
import { Button } from "utils/repeatCss";

const AppointmentForm = ({
  closeModal,
  plan,
  modalOpen,
  selectedModal,
  modalData,
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

  // States
  const [startDateTime, setStartDateTime] = useState(new Date());
  const [endDateTime, setEndDateTime] = useState(new Date());

  // useForm handler
  const { register, handleSubmit, reset } = useForm();

  // user selector
  const user = useSelector((state) => state.user.uiSeq);

  // date start end
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  // onSubmit Function
  const onSubmit = (data) => {
    const appointmentInfo = {
      ...data,
      biSeq: 1,
      start: start,
      end: end,
      uiSeq: user,
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
    reset();
    // Reset date picker and time picker
    setStartDateTime(new Date());
    setEndDateTime(new Date());

    closeModal();
  };

  // Open Modal Function
  console.log(modalData.biName);
  return (
    <FormCss>
      <>
        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          style={customModalStyles}
        >
          <Button onClick={closeModal}></Button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ul>
              <li>
                <label>{modalData.biName}</label>
                <input
                  name="title"
                  type="text"
                  placeholder="Appointment of..."
                  required
                  {...register("title", {
                    required: true,
                    maxLength: 100,
                  })}
                />
              </li>
              <li>
                <label>일정</label>
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
      </>
    </FormCss>
  );
};

export default AppointmentForm;
