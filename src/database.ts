import dotenv from "dotenv";

dotenv.config();
const knex = require("knex")({
  client: "mysql",
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
});
export default knex;
