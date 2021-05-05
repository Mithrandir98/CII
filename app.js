const express = require("express");
const path = require("path");

const app = express();

app.use(
  "/css",
  express.static(path.join(__dirname, "./node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "./node_modules/bootstrap/dist/js"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "./node_modules/jquery/dist"))
);
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.listen(3000, () => {
  console.log("Listening on port " + 3000);
});
