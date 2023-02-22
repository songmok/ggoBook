import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointments: [],
  selectedAppointment: {},
};

// const appointmentReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_APPOINTMENT:
//       return {
//         ...state,
//         appointments: [...state.appointments, action.payload],
//       };
//     case SEARCH_APPOINTMENT:
//       return {
//         ...state,
//         selectedAppointment: state.appointments.find(
//           (item) => item.id === action.payload
//         ),
//       };
//     default:
//       return state;
//   }
// };

// export default appointmentReducer;

const appointmentReducer = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    addCalendar(state, action) {
      state.appointments = action.payload.data;
    },
  },
});

export const { addCalendar, selectedAppointment } = appointmentReducer.actions;
export default appointmentReducer.reducer;
