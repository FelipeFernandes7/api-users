import dotenv from "dotenv";
import logger from "morgan";
import routes from "./routes";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
app.use(logger("dev"));
app.listen(3001, () => console.log("server started🔥 http://localhost:3001"));
