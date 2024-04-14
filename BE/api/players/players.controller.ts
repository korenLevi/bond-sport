import { Request, Response } from "express";
import PlayerService from "./players.service";

const playerService = new PlayerService();

export const getPlayers = async (req: Request, res: Response) => {
  try {
    const players = await playerService.getPlayers(req);
    res.json(players);
  } catch (error) {
    console.error("Error fetching players:", error);
    res.status(500).json({ error: "Failed to fetch players" });
  }
};

export const saveFavioritePlayer = async (req: Request, res: Response) =>{
  
}
