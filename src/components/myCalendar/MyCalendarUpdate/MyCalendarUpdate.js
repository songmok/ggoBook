import instance from "api/instance";
import request from "api/request";
import React from "react";

const MyCalendarUpdate = ({
  modalData,
  listIng,
  start,
  end,
  uiSeq,
  register,
  handleSubmit,
  setEnd,
  setStart,
}) => {
  const scheduleUpdate = async (data) => {
    let updateAppointmentInfo = {
      ...data,
      biSeq: modalData.biSeq,
      start: start,
      end: end,
      uiSeq: uiSeq,
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
  };
  return <div>MyCalendarUpdate</div>;
};

export default MyCalendarUpdate;
