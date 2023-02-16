import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./data/evet-utils";
import { formatDate } from "@fullcalendar/core";

const MyCalendar = () => {
  const [state, setState] = useState({
    externalEvents: [],
    currentEvents: [],
  });

  const handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events) => {
    setState({
      currentEvents: events,
    });
  };

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  function renderSidebarEvent(event) {
    return (
      <div
        className="fc-event"
        title={event.title}
        data-id={event.id}
        data-color={event.color}
        data-custom={event.custom}
        key={event.id}
        style={{
          backgroundColor: event.color,
          borderColor: event.color,
          cursor: "pointer",
        }}
      >
        <div className="fc-event-main">
          <div>
            <strong>{event.title}</strong>
          </div>
          {event.custom}
        </div>
      </div>
    );
  }
  useEffect(() => {
    let containerEl = document.getElementById("external-events");
    const draggable = new Draggable(containerEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        let id = eventEl.dataset.id;
        let title = eventEl.getAttribute("title");
        let color = eventEl.dataset.color;
        let custom = eventEl.dataset.custom;
        return {
          id: id,
          title: title,
          color: color,
          custom: custom,
          create: true,
        };
      },
    });
    return () => draggable.destroy();
  }, []);

  return (
    <>
      <div className="demo-app">
        <div
          className="demo-app-sidebar"
          style={{ float: "left", width: "25%" }}
        >
          <div className="demo-app-sidebar-section">
            <h2>Instructions</h2>
            <ul>
              <li>
                Select dates and you will be prompted to create a new event
              </li>
              <li>Drag, drop, and resize events</li>
              <li>Click an event to delete it</li>
            </ul>
          </div>

          <div className="demo-app-sidebar-section" id="external-events">
            <h2>All Events ({state.currentEvents.length})</h2>
            <ul>{state.currentEvents.map(renderSidebarEvent)}</ul>
          </div>
        </div>
        <div className="demo-app-main" style={{ float: "left", width: "75%" }}>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            // selectMirror={true}
            // dayMaxEvents={true}
            weekends={true}
            draggable={true}
            droppable={true}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={handleDateSelect}
            // eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            eventsSet={handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
                eventAdd={function(){}}
                eventChange={function(){}}
                eventRemove={function(){}}
                */
          />
        </div>
      </div>
    </>
  );
};

export default MyCalendar;
