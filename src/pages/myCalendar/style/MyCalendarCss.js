import styled from "styled-components";

export const MyCalendarCss = styled.section`
  display: flex;
  padding-left: 2rem;
  padding-right: 2rem;
  .fc .fc-col-header-cell-cushion {
    /* needs to be same precedence */
    padding-top: 5px; /* an override! */
    padding-bottom: 5px; /* an override! */
    font-size: 1.5rem;
  }
  .fc-daygrid-day-number {
    font-size: 1.5rem;
  }
  .fc-event-title {
    cursor: pointer;
  }
  .fullcalendarWrap {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 30px;
    .fc {
      width: 100%;
      /* display: block; */
      .fc-dom-1 {
        width: 100%;
      }
    }
  }
`;
