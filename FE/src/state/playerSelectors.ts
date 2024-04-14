import { RootState } from './store';  

export const isFavoriteSelector = (state: RootState, playerId: number) => {
  return state.players.favorites.some(player => player.id === playerId);
};