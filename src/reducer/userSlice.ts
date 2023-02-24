import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userType {
  uiSeq: number;
  token: string;
  type: string;
}

const initialState: userType = { uiSeq: 0, token: "", type: "" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.uiSeq = action.payload.uiSeq;
      state.token = action.payload.token;
      state.type = action.payload.type;
    },
    logoutUser(state) {
      state.uiSeq = 0;
      state.token = "";
      state.type = "";
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
