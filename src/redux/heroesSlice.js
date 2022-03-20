import { createSlice } from "@reduxjs/toolkit";

export const heroesSlice = createSlice({
  name: "heroes",
  initialState: {
    heroes: [],
    heroesFav: [],
  },
  reducers: {
    add: (state, heroe) => {
      state.heroes = heroe.payload;
    },
    Toggle: (state, heroeId) => {
      !state.heroesFav?.includes(heroeId.payload)
        ? state.heroesFav?.push(heroeId.payload)
        : (state.heroesFav = state.heroesFav?.filter(
            (id) => id !== heroeId.payload
          ));
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, Toggle } = heroesSlice.actions;

export default heroesSlice.reducer;
