import axios, { AxiosResponse } from "axios";
import { Request, Response } from "express";
import { Player } from "./player";
class PlayerService {
  async getPlayers(req: Request): Promise<Player[]> {
    console.log("JSON.stringify(req.query)", JSON.stringify(req.query));

    try {
      const response: AxiosResponse = await axios.get(
        "https://api.balldontlie.io/v1/players",
        {
          headers: {
            Authorization: process.env.API_KEY,
          },
          params: {
            ...req.query,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default PlayerService;
