var http = require("http");
var url = require("url");
var fs = require("fs");

http
  .createServer(function (req, res) {
    fs.readFile("home.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(3000);
