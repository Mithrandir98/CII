const express = require("express");
const path = require("path");
const serverless = require("serverless-http");

const PORT = process.env.PORT || 3000;
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

module.exports = app;
module.exports.handler = serverless(app);

app.listen(PORT, () => {
 console.log("The value of PORT is:", process.env.PORT);
 console.log("Listening on port " + PORT);
});
