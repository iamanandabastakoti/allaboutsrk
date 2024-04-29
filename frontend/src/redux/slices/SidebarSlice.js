import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleSidebar(state, action) {
      state.isOpen = action.payload;
    },
  },
});

export { sidebarSlice };
export const { toggleSidebar } = sidebarSlice.actions;
