import { createSlice } from "@reduxjs/toolkit";

export const heroesSlice = createSlice({
  name: "heroes",
  initialState: {
    heroes: [],
    heroeAbout: {},
    heroesFav: [],
  },
  reducers: {
    add: (state, heroe) => {
      state.heroes = heroe.payload;
    },
    addAbout: (state, heroe) => {
      state.heroeAbout = heroe.payload;
    },
    Toggle: (state, heroeId) => {
      !state.heroesFav.includes(heroeId.payload)
        ? state.heroesFav.push(heroeId.payload)
        : (state.heroesFav = state.heroesFav.filter(
            (id) => id !== heroeId.payload
          ));
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, addAbout, Toggle } = heroesSlice.actions;

export default heroesSlice.reducer;
