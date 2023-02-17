import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userType {
  uiSeq: number;
  kakaoID: number;
  naverID: string;
}

const initialState: userType = { uiSeq: 0, kakaoID: 0, naverID: "" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.uiSeq = action.payload;
      state.kakaoID = action.payload;
      state.naverID = action.payload;
    },
    logoutUser(state) {
      state.uiSeq = 0;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
