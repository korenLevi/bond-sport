import express from "express";
import { getPlayers } from "./players.controller";

const router = express.Router();

router.get("/", getPlayers);

export default router;
