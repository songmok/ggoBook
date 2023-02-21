import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { ADD_APPOINTMENT, SEARCH_APPOINTMENT } from "./appointmentTypes";

const initialState = {
  appointments: localStorage.getItem("appointments")
    ? JSON.parse(localStorage.getItem("appointments"))
    : [],
  selectedAppointment: {},
};

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_APPOINTMENT:
      return {
        ...state,
        appointments: [...state.appointments, action.payload],
      };
    case SEARCH_APPOINTMENT:
      return {
        ...state,
        selectedAppointment: state.appointments.find(
          (item) => item.id === action.payload
        ),
      };
    default:
      return state;
  }
};

export default appointmentReducer;

// const appointmentReducer = createSlice({
//   name: "calendar",
//   initialState,
//   reducers: {
//     addCalendar(state, action) {
//       // const df = (state.appointments = action.payload.data);
//     },
//     selectedAppointment(state, action) {
//       // return {
//       //   ...state,
//       //   selectedAppointment: state.appointments.find(
//       //     (item) => item.id === action.payload
//       //   ),
//       // };
//       state.selectedAppointment = state.appointments.find(
//         (v) => v.id === action.payload
//       );
//     },
//   },
// });

// export const { addCalendar, selectedAppointment } = appointmentReducer.actions;
// export default appointmentReducer.reducer;
