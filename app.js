// var express = require("express");

// var app = express();
// app.set("view engine", "ejs");
// app.engine("html", require("ejs").renderFile);
// app.use(express.static(__dirname + "/public"));

// app.get("/", function (req, res) {
//   res.render("home.html");
// });

// var port = process.env.PORT || 3000;
// app.listen(port, function () {
//   console.log("Listening on " + port);
// });

// var express = require("express");
// var app = express();
// var router = express.Router();
// var path = __dirname + "/views/";

// router.use(function (req, res, next) {
//   console.log("/" + req.method);
//   next();
// });
// app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

// router.get("/", function (req, res) {
//   res.sendFile(path + "home.html");
// });

// app.use("/", router);

// app.use("*", function (req, res) {
//   res.sendFile(path + "404.html");
// });

// app.listen(3000, function () {
//   console.log("Live at Port 3000");
// });

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
  res.sendFile(path.join(__dirname, "views/home.html"));
});

app.listen(3000, () => {
  console.log("Listening on port " + 3000);
});
