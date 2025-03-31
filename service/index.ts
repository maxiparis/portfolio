import express = require("express");
// @ts-ignore
import cors = require('cors');

const app = express();

const PORT = 3001;

// Serve up the static content
app.use(cors());
//make sure to parse the body from json
app.use(express.json());
app.use(express.static('dist'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});