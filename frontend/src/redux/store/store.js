import { configureStore } from "@reduxjs/toolkit";
import { sidebarSlice } from "../slices/SidebarSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
  },
});

export default store;
