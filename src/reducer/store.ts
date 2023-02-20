import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import appointmentReducer from "./calendarSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    appointment: appointmentReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
