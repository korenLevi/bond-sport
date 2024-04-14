import React from "react";
import { Player } from "../types/player.type";
import { RootState } from "../state/store";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { isFavoriteSelector } from "../state/playerSelectors";
import { addFavorite, removeFavorite } from "../state/playersSlice";

interface PlayerListItemProps {
  player: Player;
}

export const PlayerListItem: React.FC<PlayerListItemProps> = ({ player }) => {
  const isFavorite = useSelector((state: RootState) =>
    isFavoriteSelector(state, player.id)
  );
  const dispatch = useDispatch();
  const handleAddFavorite = () => {
    dispatch(addFavorite(player));
  };
  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(player.id));
  };
  return (
    <tr>
      <td>{player.id}</td>
      <td>{`${player.first_name} ${player.last_name}`}</td>
      <td>
        {isFavorite ? (
          <Button variant="primary" onClick={handleRemoveFavorite}>
            Remove from Favorite
          </Button>
        ) : (
          <Button variant="primary" onClick={handleAddFavorite}>
            Add to Favorite
          </Button>
        )}
      </td>
    </tr>
  );
};
