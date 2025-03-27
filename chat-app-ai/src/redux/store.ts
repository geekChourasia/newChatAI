import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./slices/chatSlice";

export const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // ✅ Export RootState
export type AppDispatch = typeof store.dispatch;
