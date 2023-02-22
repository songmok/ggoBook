import { createSlice } from "@reduxjs/toolkit";

interface userType {
  uiSeq: number;
}

const initialState: userType = { uiSeq: 0 };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.uiSeq = action.payload;
    },
    logoutUser(state) {
      state.uiSeq = 0;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
