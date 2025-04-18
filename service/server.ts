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


// Catch-all route to handle wildcard paths and serve the frontend application
app.get('*wild', (_req, res) => {
  res.sendFile('index.html', { root: 'dist' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});