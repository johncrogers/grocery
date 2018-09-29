console.log(`SERVER INITIALIZE:`);
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const server = express();
const apiRouter = require("./api/api.js").apiRouter;

const port = process.env.PORT || 8080;
server.use(cors());
server.use(bodyParser.json());
server.use(express.static(__dirname + "/../app/dist"));
server.get("/", (request, response) => {
  console.log(`GET <BASE PATH>`);
  response.sendFile(path.join(`${__dirname}/../app/dist/index.html`));
});

server.use("/api", apiRouter);

server.listen(port, function() {
  console.log(`  -> Listening on port ${port}!`);
});
