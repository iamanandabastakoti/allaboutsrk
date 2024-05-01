import { createSlice } from "@reduxjs/toolkit";
const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    logInAdmin(state, action) {
      state.isLoggedIn = action.payload;
    },
    logOutAdmin(state, action) {
      state.isLoggedIn = !action.payload;
    },
  },
});

export { adminSlice };
export const { logInAdmin, logOutAdmin } = adminSlice.actions;
