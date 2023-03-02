import React, { Component, useCallback, useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { MyCalendarCss } from "./style/MyCalendarCss";
import axios from "axios";
import instance from "api/instance";
import request from "api/request";
import MyCalendarSchedule from "components/myCalendar/listBook/MyCalendarSchedule";

import MyCalendarModal from "components/myCalendar/myCalendarModal/MyCalendarModal";
import ListBook from "components/myCalendar/listBook/ListBook";
import MySeleteModal from "components/myCalendar/listBook/MySeleteModal";
import moment from "moment";
import MyCalendarUpdate from "components/myCalendar/MyCalendarUpdate/MyCalendarUpdate";

const MyCalendar = () => {
  // States
  // 모달
  const [modalOpen, setModalOpen] = useState(false);
  const [slecteModal, setSlecteModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  // const [selectedModal, setSelectedModal] = useState("");
  // 이벤트
  const [event, setEvent] = useState([]);
  // 리스트
  const [plan, setPlan] = useState([]);
  const [ing, setIng] = useState([]);
  // 책 seq
  const [modalData, setModalData] = useState();
  // 유저 Seq
  const uiSeq = useSelector((state) => state.user.uiSeq);
  // date start end
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [selectStart, setSelectStart] = useState(new Date());
  const [selectEnd, setSelectEnd] = useState(new Date());
  // useForm handler
  const { register, handleSubmit } = useForm();
  const [update, setUpdate] = useState();
  // 선택 리스트
  const [selectData, setSelectData] = useState("");

  const addListEvent = async () => {
    let user = {
      uiSeq: uiSeq,
    };
    await axios
      .get(`http://192.168.0.160:8520/api/schedule/my`, {
        params: user,
      })
      .then((res) => {
        console.log("addDate", res.data);
        if (res.data.message === "데이터 없음") {
          res.data = [];
        }
        for (let temp of res.data) {
          let tomorrow = new Date(temp.end);
          tomorrow.setDate(tomorrow.getDate() + 1);
          temp.end = moment(tomorrow).format("YYYY-MM-DD");
          console.log("df", temp);
        }
        setEvent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // booklist
  const listPlan = async () => {
    const params = {
      uiSeq: uiSeq,
    };
    await instance.get(request.listPlan, { params: params }).then((res) => {
      console.log(res.data.mybookList);
      setPlan(res.data.mybookList);
    });
  };

  const listIng = async () => {
    const params = {
      uiSeq: uiSeq,
    };
    await instance.get(request.myCalendar, { params: params }).then((res) => {
      setIng(res.data);
      console.log("서버에서 불러옴 일정리스트", res.data);
      addListEvent();
    });
  };

  useEffect(() => {
    addListEvent();
    listPlan();
    listIng();
  }, []);

  // modal api
  const openForm = () => {
    // setSelectedModal(true);
    openModal();
  };
  const openModal = () => {
    setModalOpen(true);
  };
  // Close Modal Function
  const closeModal = () => {
    setModalOpen(false);
  };

  // select modal
  const selectModalOpen = () => {
    setSlecteModal(true);
  };
  const selectModalClose = () => {
    setSlecteModal(false);
    setSelectData("");
  };
  //update modal
  const updateModalOpen = () => {
    setUpdateModal(true);
  };
  const updateModalClose = () => {
    setUpdateModal(false);
  };
  console.log("뭘보세요", plan);
  return (
    <MyCalendarCss>
      <ListBook
        plan={plan}
        openForm={openForm}
        setModalData={setModalData}
        listPlan={listPlan}
      />
      <MyCalendarSchedule
        ing={ing}
        openForm={openForm}
        setModalData={setModalData}
        setIng={setIng}
        updateModalOpen={updateModalOpen}
        addListEvent={addListEvent}
      />
      <MyCalendarModal
        modalData={modalData}
        closeModal={closeModal}
        modalOpen={modalOpen}
        start={start}
        setStart={setStart}
        end={end}
        setEnd={setEnd}
        handleSubmit={handleSubmit}
        register={register}
        uiSeq={uiSeq}
        listIng={listIng}
        event={event}
      />
      <MySeleteModal
        uiSeq={uiSeq}
        setSelectStart={setSelectStart}
        setSelectEnd={setSelectEnd}
        plan={plan}
        slecteModal={slecteModal}
        handleSubmit={handleSubmit}
        register={register}
        selectModalOpen={selectModalOpen}
        selectModalClose={selectModalClose}
        listIng={listIng}
        selectStart={selectStart}
        selectEnd={selectEnd}
        setSelectData={setSelectData}
        selectData={selectData}
      />
      <MyCalendarUpdate
        ing={ing}
        updateModal={updateModal}
        modalData={modalData}
        start={start}
        setStart={setStart}
        end={end}
        setEnd={setEnd}
        handleSubmit={handleSubmit}
        register={register}
        uiSeq={uiSeq}
        listIng={listIng}
        updateModalOpen={updateModalOpen}
        updateModalClose={updateModalClose}
      />
      <div className="fullcalendarWrap">
        {uiSeq ? (
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "title",
              right: "prevYear,prev,today,next,nextYear",
            }}
            eventClick={(e) => {
              const deleteEvnet = (e) => {
                if (window.confirm("정말 삭제하시겠습니까?")) {
                  const siSeq = e.event._def;
                  instance
                    .delete(request.scheduleDelete, {
                      params: {
                        id: siSeq.publicId,
                      },
                    })
                    .then((res) => {
                      console.log("삭제될까?", res);
                      addListEvent();
                      listIng();
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
              };
              deleteEvnet(e);
            }}
            initialView="dayGridMonth"
            events={event}
            updateModalClose={updateModalClose}
            droppable={false}
            allDaySlot={false}
            defaultAllDay={false}
            editable={true}
            selectable={true}
            select={(data) => {
              selectModalOpen(true);
              setSelectStart(data.startStr);
              let tomorrow = new Date(data.endStr);
              tomorrow.setDate(tomorrow.getDate() - 1);
              data.endStr = moment(tomorrow).format("YYYY-MM-DD");
              setSelectEnd(data.endStr);
            }}
            selectMirror={false}
            displayEventTime={false}
            weekends={true}
            locale={"ko"}
            eventStartEditable={false}
            height={"85vh"}
            width={"85vw"}
          />
        ) : (
          <div>Loading</div>
        )}
      </div>
    </MyCalendarCss>
  );
};

export default MyCalendar;
