
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Player, PlayersState } from "../types/player.type";

const initialState: PlayersState = {
  favorites: [],
};

const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<Player>) {
      state.favorites.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<number>) {
      state.favorites = state.favorites.filter(player => player.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = playersSlice.actions;
export default playersSlice.reducer;