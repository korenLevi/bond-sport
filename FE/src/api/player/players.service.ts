import Api from "../api";
import { Player } from "../../types/player.type";

interface Filters {
  searchTerm?: string;
  perPage?: number;
  cursor?: number;
}
export const getPlayers = async (filters: Filters) => {
  const params = {
    search: filters.searchTerm,
    per_page: filters.perPage,
    cursor: filters.cursor,
  };
  try {
    const res = await Api.get("/", { params });
    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error("Failed to fetch players");
    }
  } catch (error) {
    console.error("Error fetching players:", error);
    throw error;
  }
};


