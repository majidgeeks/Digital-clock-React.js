import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;
