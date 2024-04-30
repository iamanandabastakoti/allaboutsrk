import { configureStore } from "@reduxjs/toolkit";
import { sidebarSlice } from "../slices/SidebarSlice";
import { adminSlice } from "../slices/AdminSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
    admin: adminSlice.reducer,
  },
});

export default store;
