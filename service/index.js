"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("node:path");
var express = require("express");
var app = express();
var PORT = 3001;
var staticFolderPath = path.join(__dirname, "public");
app.use(express.static(staticFolderPath));
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
