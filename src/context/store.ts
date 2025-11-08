import { configureStore } from "@reduxjs/toolkit";
import selectedChatGroupReducer from "./features/selectedChatGroup/selectedChatGroupSlice";

export const store = configureStore({
  reducer: {
    selectedChatGroup: selectedChatGroupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;