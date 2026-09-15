import express from "express"
import { DbConnect } from "./config/db.config.js";
const app  = express();

DbConnect()
app.use(express.json());

export default app;