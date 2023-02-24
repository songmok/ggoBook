import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useLocation, useParams } from "react-router-dom";

import AppointmentForm from "./AppointmentForm";
import { useSelector, useDispatch } from "react-redux";
import AppointmentDetails from "./AppointmentDetails";

import { useForm } from "react-hook-form";
import axios from "axios";
import ListBook from "components/listBook/ListBook";
import instance from "api/instance";
import request from "api/request";
import { MyCalendarCss } from "./style/MyCalendarCss";
import { Button } from "utils/repeatCss";


const MyCalendar = () => {
  const { reset } = useForm();
  // States
  // 모달
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState("");
  // 이벤트
  const [event, setEvnet] = useState([]);
  // 리스트
  const [plan, setPlan] = useState([]);
  // 책 seq
  const [modalData, setModalData] = useState();
  // 유저 Seq
  const uiSeq = useSelector((state) => state.user.uiSeq);

  const selectedEvent = useSelector(
    (state) => state.appointment.selectedAppointment
  );
  // 일정추가
  const addEvent = async () => {
    let user = {
      uiSeq: uiSeq,
    };
    await axios
      .get(`http://192.168.0.160:8520/api/schedule/my`, {
        params: user,
      })
      .then((res) => {
        console.log(res.data);
        setEvnet(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // 일정삭제
  const deleteEvnet = (e) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      const siSeq = e.event._def;
      instance
        .delete(request.delete, {
          params: {
            id: siSeq.publicId,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  // booklist
  const listPlan = async () => {
    const params = {
      uiSeq: uiSeq,
    };
    await instance.get(request.listPlan, { params: params }).then((res) => {
      console.log(res.data.mybookList);
      console.log(res);
      setPlan(res.data.mybookList);
    });
  };
  useEffect(() => {
    addEvent();
    listPlan();
  }, []);

  const openForm = () => {
    setSelectedModal(true);
    openModal();
  };
  const openModal = () => {
    setModalOpen(true);
  };

  // Close Modal Function
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <MyCalendarCss>
      <ListBook plan={plan} openForm={openForm} setModalData={setModalData} />
      <AppointmentForm
        plan={plan}
        modalData={modalData}
        closeModal={closeModal}
        modalOpen={modalOpen}
        selectedModal={selectedModal}
      />
      <div className="fullcalendarWrap">
        {uiSeq ? (
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "title",
              right: "prevYear,prev,today,next,nextYear",
            }}
            eventClick={deleteEvnet}
            initialView="dayGridMonth"
            // initialDate={initialDate}
            events={event}
            editable={true}
            selectable={false}
            selectMirror={true}
            weekends={true}
            // eventClick={handleEventClick}
            // dateClick={handleEventClick}
            views={{
              dayGrid: {
                dayMaxEventRows: 4,
              },
            }}
            height="90vh"
          />
        ) : (
          <div>Loading</div>
        )}
      </div>
    </MyCalendarCss>
  );
};

export default MyCalendar;
// : selectedModal === "AppointmentDetails" ? (
//   <AppointmentDetails selectedEvent={selectedEvent} />
// )
