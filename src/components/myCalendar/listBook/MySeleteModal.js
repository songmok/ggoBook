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
import ListSelectCss from "./style/ListselectCss";
const MySeleteModal = ({
  plan,
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
  selectData,
  setSelectData,
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
  const selectSubmit = (data) => {
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
    setSelectStart(new Date());
    setSelectEnd(new Date());
    selectModalClose();
  };
  console.log("selectData", selectData);
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
            <ListSelectCss onSubmit={handleSubmit(selectSubmit)}>
              <div className="myBook">
                {plan.map((v, i) => {
                  return (
                    <>
                      <div className="myBookIn" key={i}>
                        <input
                          type="button"
                          id={v.biName}
                          onClick={() => {
                            setSelectData(v);
                          }}
                        />
                        <label htmlFor={v.biName}>
                          <div className="bookWrap" key={v.id}>
                            <div className="bookName">{v.biName}</div>
                            <img src={v.bimgUri} alt={v.biName} />
                          </div>
                        </label>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="planList">
                <div className="header">
                  {selectData !== "" ? (
                    <h2>{selectData.biName}</h2>
                  ) : (
                    <h2>왼쪽에서 책을 선택해주세요</h2>
                  )}
                </div>
                <ul>
                  <li className="dateWrap">
                    <div className="start dates">
                      <span className="dateHead">시작 날</span>
                      <span className="str">{selectStart}</span>
                    </div>
                    <div className="end dates">
                      <span className="dateHead">마지막 날</span>
                      <span className="str">{selectEnd}</span>
                    </div>
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
              </div>
            </ListSelectCss>
          </Modal>
        )}
      </FormModalCss>
    </>
  );
};

export default MySeleteModal;
