import * as path from "node:path";
import express = require("express");
var app = express();

const PORT = 3001;

// Define the static folder path
const staticFolderPath = path.join(__dirname, "public");

// Serve static files from the "public" folder
app.use(express.static(staticFolderPath));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});