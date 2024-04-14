import { useState, useEffect } from "react";
import { getPlayers } from "../api/player/players.service";

interface Player {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  height: string;
  weight: number;
  jersey_number: string | any;
  college: string;
  country: string;
  draft_year: number;
  draft_round: number;
  draft_number: number;
  team: {
    id: number;
    conference: string;
    division: string;
    city: string;
    name: string;
    full_name: string;
    abbreviation: string;
  };
}

export const usePlayers = (
  searchTerm: string = "",
  perPage: number = 1,
  cursor: number = 1
) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [nextCursor, setNextCursor] = useState<number>(25);
  const [prevCursor, setPrevCursor] = useState<number>(25);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data, meta } = await getPlayers({
          searchTerm,
          perPage,
          cursor,
        });

        setPlayers(data);
        setNextCursor(meta.next_cursor);
        setPrevCursor(meta?.prev_cursor);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [searchTerm, perPage, cursor]);

  return { players, loading, error, nextCursor, prevCursor };
};
