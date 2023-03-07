import DatePicker from "react-date-picker";
import Modal from "react-modal";
import axios from "axios";
import moment from "moment";

import { FormCss, FormModalCss } from "./style/AppointFormStyles";
import { Button } from "utils/repeatCss";
import { useCallback, useState } from "react";
import instance from "api/instance";
import request from "api/request";

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
  ing,
  listIng,
  event,
  customModalStyles
}) => {


  // Open Modal Function
  const onSubmit = async (data) => {
    const appointmentInfo = {
      ...data,
      biSeq: modalData.biSeq,
      start: start,
      end: end,
      uiSeq: uiSeq,
    };
    await instance
      .post(request.scheduleAdd, appointmentInfo)
      .then((res) => {
        console.log(res.data);
        console.log(appointmentInfo);
        listIng();
      })
      .catch((err) => {
        console.log(err);
        closeModal();
      });
    setStart(new Date());
    setEnd(new Date());
    closeModal();
  };
  // update list

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
                    onChange={(e) => {
                      let tomo = new Date(e);
                      e = moment(tomo).format("YYYY-MM-DD");
                      let dates = new Date(e);
                      setStart(dates);
                    }}
                    value={start}
      
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
