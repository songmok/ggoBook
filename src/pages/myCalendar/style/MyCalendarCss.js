import styled from "styled-components";

export const MyCalendarCss = styled.section`
  display: flex;
  padding-left: 2rem;
  padding-right: 2rem;

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
