import React, { useEffect, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";

export default function MyCalendar() {
  // initial state
  const [state, setState] = useState({
    weekendsVisible: true,
    externalEvents: [
      { title: "Art 1", color: "#0097a7", id: 34432 },
      { title: "Art 2", color: "#f44336", id: 323232 },
      { title: "Art 3", color: "#f57f17", id: 1111 },
      { title: "Art 4", color: "#90a4ae", id: 432432 },
    ],
  });

  // load external events
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
  // load external events

  return (
    <>
      <div id="external-events">
        <p>
          <strong>Draggable Events</strong>
        </p>

        <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
          <div className="fc-event-main">My Event 1</div>
        </div>
        <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
          <div className="fc-event-main">My Event 2</div>
        </div>
        <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
          <div className="fc-event-main">My Event 3</div>
        </div>
        <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
          <div className="fc-event-main">My Event 4</div>
        </div>
        <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
          <div className="fc-event-main">My Event 5</div>
        </div>

        <p>
          <input type="checkbox" id="drop-remove" />
          <label htmlFor="drop-remove">remove after drop</label>
        </p>
      </div>

      <div id="calendar-container">
        <div id="calendar"></div>
      </div>
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
        selectMirror={true}
        dayMaxEvents={true}
        weekends={state.weekendsVisible}
        // events={state.calendarEvents}
        // droppable={true}
        // eventReceive={handleEventReceive}
      />
    </>
  );
}
