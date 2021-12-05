const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

app.listen(port, (req, res) => {
  console.log("run server");
});
