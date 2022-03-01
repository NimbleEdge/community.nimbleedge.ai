import { createSlice } from "@reduxjs/toolkit";

const contributorSlice = createSlice({
  name: "contributor",
  initialState: {
    contributors: [],
  },
  reducers: {
    setContributor: (state, action) => {
      const { contributor } = action.payload;
      if (contributor) {
        state.contributors.push(contributor);
      }
    },
  },
});

export const { setContributor } = contributorSlice.actions;

export default contributorSlice.reducer;
