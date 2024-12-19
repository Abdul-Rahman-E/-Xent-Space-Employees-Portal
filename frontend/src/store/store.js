import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import sidebarReducer from "./sidebarSlice.js";
import menuReducer from "./menuSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    sidebar: sidebarReducer,
    menu: menuReducer,
  },
});
