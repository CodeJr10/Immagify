import "dotenv/config";

import connectDB from "./config/mongodb.js";
import cors from "cors";
import express from "express";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());
await connectDB();
app.get("/", (req, res) => res.send("API working"));

app.listen(PORT, () => console.log("Server running on " + PORT));
