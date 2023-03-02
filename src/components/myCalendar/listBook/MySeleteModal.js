import DatePicker from "react-date-picker";
import Modal from "react-modal";
import axios from "axios";
import moment from "moment";

import { Button } from "utils/repeatCss";
import {
  FormCss,
  FormModalCss,
} from "../myCalendarModal/style/AppointFormStyles";
import { useState } from "react";
const MySeleteModal = ({
  plan,
  selectModalOpen,
  selectModalClose,
  register,
  slecteModal,
  selectStart,
  selectEnd,
  uiSeq,
  listIng,
  setSelectStart,
  setSelectEnd,
  handleSubmit,
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
  const seletSubmit = (data) => {
    const appointmentInfo = {
      ...data,
      biSeq: selectData.biSeq,
      start: selectStart,
      end: selectEnd,
      uiSeq: uiSeq,
    };
    axios
      .post("http://192.168.0.160:8520/api/schedule/add", appointmentInfo)
      .then((res) => {
        console.log(res.data);
        console.log(appointmentInfo);
        listIng();
      })
      .catch((err) => {
        console.log(err);
        selectModalClose();
      });
    listIng();
    setSelectStart(new Date());
    setSelectEnd(new Date());
    selectModalClose();
  };
  const [selectData, setSelectData] = useState("");
  console.log("셀리트", selectData);
  console.log("sdsd", plan);
  return (
    <>
      <FormModalCss>
        {slecteModal && (
          <Modal
            isOpen={slecteModal}
            onRequestClose={selectModalClose}
            ariaHideApp={false}
            style={customModalStyles}
          >
            <button onClick={selectModalClose} className="dks">
              X
            </button>
            <FormCss onSubmit={handleSubmit(seletSubmit)}>
              {plan.map((v, i) => {
                return (
                  <>
                    <div className="myBook" key={v.id}>
                      <button
                        onClick={() => {
                          setSelectData(v);
                        }}
                      >
                        <div className="he" key={v.id}>
                          <div className="df">{v.biName}</div>
                        </div>
                      </button>
                    </div>
                  </>
                );
              })}
              <div className="header">
                <h2>{selectData.biName}</h2>
              </div>
              <ul>
                <li className="dateWrap">
                  <span className="dateHead">시작 날</span>
                  <span>{setSelectStart}</span>
                  <span className="dateHead">마지막 날</span>
                  <span>{setSelectEnd}</span>
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

export default MySeleteModal;
