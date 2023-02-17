import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  appointments: [],
  selectedAppointment: {},
};

const appointmentReducer = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    addCalendar(state, action) {
      // return;{...state, calendarInfo: payload.data}
      state.appointments = action.payload.data;
    },
    selectedAppointment(state, action) {
      state.selectedAppointment = action.payload.data;
    },
  },
});

export const { addCalendar, selectedAppointment } = appointmentReducer.actions;
export default appointmentReducer.reducer;
