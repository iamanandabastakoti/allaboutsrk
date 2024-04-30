import { createSlice } from "@reduxjs/toolkit";
const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    logInAdmin(state, action) {},
    logOutAdmin(state, action) {},
  },
});

export { adminSlice };
export const { logInAdmin, logOutAdmin } = adminSlice.actions;
