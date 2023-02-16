import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  uiSeq: number;
}

const initialState = { uiSeq: 0 } as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action: PayloadAction<number>) {
      state.uiSeq = action.payload;
    },
    logoutUser(state) {
      state.uiSeq = 0;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
