import type { IConversation } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  // UI state
  showRightPanel: boolean;

  // Chat state
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedConversation: IConversation | null;
}

const initialState: AppState = {
  // UI state
  showRightPanel: false,

  // Chat state
  selectedConversation: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openShowRightPanel(state) {
      state.showRightPanel = true;
    },
    closeShowRightPanel(state) {
      state.showRightPanel = false;
    },
    setSelectedConversation(state, action: PayloadAction<IConversation>) {
      state.selectedConversation = action.payload;
    },
  },
});

export const {
  openShowRightPanel,
  closeShowRightPanel,
  setSelectedConversation,
} = appSlice.actions;

export default appSlice.reducer;
