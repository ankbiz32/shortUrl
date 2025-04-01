import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import urlRoutes from "./routes/urlRoutes";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api", urlRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));