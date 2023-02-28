import styled from "styled-components";

export const MyCalendarCss = styled.section`
  display: flex;
  padding-left: 2rem;
  padding-right: 2rem;

  @media ${(props) => props.theme.mob} {
    position: fixed;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    display: grid;
    overflow-y: scroll;
    width: 100%;
    height: 83vh;
    overflow-x: hidden;
  }
  .fc-theme-standard {
    width: 100%;
  }

  .fc-daygrid-body {
  }
  .fc-col-header {
    width: 100% !important;
  }
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
  }
`;
