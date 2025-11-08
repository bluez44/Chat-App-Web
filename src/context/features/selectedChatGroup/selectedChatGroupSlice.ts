import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { selectedChatGroupModel } from "../../../constant/model/chat";

const initialState: selectedChatGroupModel = {
  id: 0,
  avatar: "",
  name: "",
};

export const selectedChatGroupSlice = createSlice({
  name: "selectedGroupChat",
  initialState,
  reducers: {
    resetSelectedGroupChat: () => {
      return {
        id: 0,
        avatar: "",
        name: "",
      };
    },
    setSelectedGroupChat: (state, action: PayloadAction<selectedChatGroupModel>) => {
      state.avatar = action.payload.avatar;
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
  },
});

// Action creators are generated for each case reducer function
export const { resetSelectedGroupChat, setSelectedGroupChat } = selectedChatGroupSlice.actions;

export default selectedChatGroupSlice.reducer;
