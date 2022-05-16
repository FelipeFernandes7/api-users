import dotenv from "dotenv";
import logger from 'morgan';
import routes from "./routes";
import express from "express";

dotenv.config();

const app = express();

app.use(express.json());
app.use(routes);
app.use(logger("dev"));
app.listen(3000, () => console.log("server started🔥 http://localhost:3000"));
