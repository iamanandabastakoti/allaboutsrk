import { createSlice } from "@reduxjs/toolkit";
const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isLoggedIn: false,
    adminSidebarListNum: 1,
  },
  reducers: {
    logInAdmin(state, action) {
      state.isLoggedIn = true;
    },
    logOutAdmin(state, action) {
      state.isLoggedIn = false;
    },
    toggleAdminSidebarListNum(state, action) {
      state.adminSidebarListNum = action.payload;
    },
  },
});

export { adminSlice };
export const { logInAdmin, logOutAdmin, toggleAdminSidebarListNum } =
  adminSlice.actions;
