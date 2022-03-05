import { createSlice } from "@reduxjs/toolkit";

export const heroesSlice = createSlice({
  name: "heroes",
  initialState: {
    heroes: [],
  },
  reducers: {
    add: (state, heroe) => {
      state.heroes = heroe.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add } = heroesSlice.actions;

export default heroesSlice.reducer;
