import { PlayersState } from "../types/player.type";

interface StoredState {
  players: PlayersState;
}

export const loadState = (): StoredState | undefined => {
  try {
    const serializedState = localStorage.getItem("favorites");
    if (serializedState === null) {
      return undefined; // No state in localStorage, use initialState instead
    }
    return { players: JSON.parse(serializedState) as PlayersState };
  } catch (err) {
    console.error("Failed to load state:", err);
    return undefined; // Return undefined to fallback to initialState
  }
};

export const saveState = (state: PlayersState): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("favorites", serializedState);
  } catch (err) {
    console.error("Failed to save state:", err);
  }
};
