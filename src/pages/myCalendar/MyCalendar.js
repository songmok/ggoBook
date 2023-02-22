import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useLocation, useParams } from "react-router-dom";
import Modal from "react-modal";
import AppointmentForm from "./AppointmentForm";
import { useSelector, useDispatch } from "react-redux";
import AppointmentDetails from "./AppointmentDetails";
import {
  Button,
  ButtonContainer,
  CloseButton,
  MainWrapper,
} from "./style/CalendarStyles";
import { useForm } from "react-hook-form";
import axios from "axios";

const MyCalendar = () => {
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
  const { reset } = useForm();
  // States
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState("");
  const [event, setEvnet] = useState([]);
  // const events = useSelector((state) => state.appointment.appointments);
  const uiSeq = useSelector((state) => state.user.uiSeq);

  const selectedEvent = useSelector(
    (state) => state.appointment.selectedAppointment
  );
  const fetchData = async () => {
    const user = {
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
  useEffect(() => {
    fetchData();
  }, []);

  const openForm = () => {
    setSelectedModal("AppointmentForm");
    openModal();
  };

  // Open Modal Function
  const openModal = () => {
    setModalOpen(true);
  };

  // Close Modal Function
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <MainWrapper>
      <ButtonContainer>
        <Button onClick={openForm}>Add Appointment</Button>
      </ButtonContainer>
      <div>
        {uiSeq ? (
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "title",
              right: "prevYear,prev,today,next,nextYear",
            }}
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

      {modalOpen && (
        <Modal
          isOpen={true}
          onRequestClose={closeModal}
          ariaHideApp={false}
          style={customModalStyles}
        >
          <CloseButton onClick={closeModal}>X</CloseButton>
          {selectedModal === "AppointmentForm" ? (
            <AppointmentForm closeModal={closeModal} />
          ) : selectedModal === "AppointmentDetails" ? (
            <AppointmentDetails selectedEvent={selectedEvent} />
          ) : null}
        </Modal>
      )}
    </MainWrapper>
  );
};

export default MyCalendar;
