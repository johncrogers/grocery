const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const server = express();
const port = 8080;
server.use(cors());
server.use(bodyParser.json());
server.use(express.static(__dirname + "/../app/dist"));
server.get("/", (request, response) => {
  response.sendFile(path.join(`${__dirname}/../app/dist/index.html`));
});

server.listen(port, function () {
  console.log(`listening on port ${port}!`);
});