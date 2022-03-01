import { createSlice } from "@reduxjs/toolkit";
import { screenType } from "../../utils/screen";

const screenSlice = createSlice({
  name: "screen",
  initialState: {
    screen: screenType(),
  },
  reducers: {
    setScreen: (state, action) => {
      const { innerWidth } = action.payload;
      state.screen = innerWidth <= 949 ? "MOBILE" : "BIG_SCREEN";
    },
  },
});

export default screenSlice.reducer;
export const { setScreen } = screenSlice.actions;
