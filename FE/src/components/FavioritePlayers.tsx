import React, { useState } from "react";
import { Table, Button, Pagination } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../state/playersSlice";
import { Player } from "../types/player.type";
interface FavoritePlayersProps {
  favorites: Player[];
}
export const FavoritePlayers: React.FC<FavoritePlayersProps> = ({
  favorites,
}) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const handleRemoveFavorite = (player: Player) => {
    dispatch(removeFavorite(player.id));
  };
  if (!favorites.length) {
    return <></>;
  }
  const pageCount = Math.ceil(favorites.length / itemsPerPage);

  const currentItems = favorites.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const pageNumbers = [];
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Table responsive="lg">
        <thead className="p-2">
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody className="p-2">
          {currentItems.map((player, index) => {
            return (
              <tr key={index}>
                <td>{player.id}</td>
                <td>{`${player.first_name} ${player.last_name}`}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => handleRemoveFavorite(player)}
                  >
                    Remove from Favorite
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Pagination className="p-2">{pageNumbers}</Pagination>
    </div>
  );
};
