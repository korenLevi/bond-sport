import { configureStore } from "@reduxjs/toolkit";
import playersReducer from "./playersSlice";
import { loadState, saveState } from "../services/localStorage";

const persistedState = loadState();

const store = configureStore({
  reducer: {
    players: playersReducer,
  },
  preloadedState: persistedState, 
});

store.subscribe(() => {
  saveState(store.getState().players);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
