import styled from "styled-components";

const MyCalendarCss = styled.section`
  .demo-app {
    display: flex;
    min-height: 100%;
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    font-size: 14px;
  }

  .demo-app-sidebar {
    width: 300px;
    line-height: 1.5;
    background: #eaf9ff;
    border-right: 1px solid #d3e2e8;
  }

  .demo-app-sidebar-section {
    padding: 2em;
  }

  .demo-app-main {
    flex-grow: 1;
    padding: 3em;
  }

  .fc {
    /* the calendar root */
    max-width: 1100px;
    margin: 0 auto;
  }

  .fc-day-sun a {
    color: red;
  }

  /* 토요일 날짜: 파란색 */
  .fc-day-sat a {
    color: blue;
  }
`;
export default MyCalendarCss;
