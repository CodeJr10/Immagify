import "dotenv/config";

import connectDB from "./config/mongodb.js";
import cors from "cors";
import express from "express";
import userRouter from "./routes/userRoutes.js";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());
console.log("MONGODB_URI is:", process.env.MONGODB_URI);

await connectDB();

app.use("/api/user", userRouter);
app.get("/", (req, res) => res.send("API working"));

app.listen(PORT, () => console.log("Server running on " + PORT));
