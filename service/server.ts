import express from "express";
import cors from "cors";
import {config} from "dotenv";
import {apiRouter} from "./routes/routes";

config();

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

// Routes
app.use("/api", apiRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});