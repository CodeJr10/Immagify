import "dotenv/config";

import cors from "cors";
import express from "express";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("API working"));

app.listen(PORT, () => console.log("Server running on " + PORT));
