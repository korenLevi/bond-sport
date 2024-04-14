import { FC, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { PerPage } from "./PerPage";
import { usePlayers } from "../hooks/usePlayers";
import { TableLoading } from "react-bootstrap-table-loading";
import { PlayerListItem } from "./PlayerListItem";

export const PlayersList: FC = () => {
  const perPageOptions = [25, 50, 100]; // Define available page sizes
  const [cursor, setCursor] = useState(0);
  const [perPage, setPerPage] = useState(perPageOptions[0]);
  const { players, loading, error, nextCursor, prevCursor } = usePlayers(
    "",
    perPage,
    cursor
  );

  const headers = ["ID", "Name"];
  const handlePerPageChange = (size: number) => {
    setPerPage(size);
  };

  return (
    <>
      <div className="mb-4">
        <PerPage
          pageSizeOptions={perPageOptions}
          perPage={perPage}
          onPageSizeChange={handlePerPageChange}
        />
      </div>
      <Table size="sm" responsive="lg">
        <thead>
          <tr>
            {headers.map((head) => (
              <th key={head}>{head}</th>
            ))}
          </tr>
        </thead>
        {loading ? (
          <TableLoading tbody={false} lines={25} columns={2} />
        ) : (
          <tbody>
            {players.map((player, index) => {
              return <PlayerListItem key={index} player={player} />;
            })}
          </tbody>
        )}
      </Table>
      <div className="d-flex justify-content-between">
        <Button
          disabled={cursor === 0}
          variant="primary"
          onClick={() => {
            setCursor(prevCursor - perPage);
          }}
        >
          Prev
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            setCursor(nextCursor);
          }}
        >
          Next
        </Button>
      </div>
    </>
  );
};
