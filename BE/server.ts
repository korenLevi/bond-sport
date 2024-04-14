import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import router from "./api/players/players.route";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "public")));
} else {
  const corsOptions = {
    origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
    credentials: true,
  };
  app.use(cors(corsOptions));
}

const createServer = async () => {
  app.use(express.json());
  app.use(router);
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

createServer();
