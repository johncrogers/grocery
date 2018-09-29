const endpoints = require("./endpoints/_endpoints.js");
const express = require("express");
const apiRouter = express.Router();
console.log(`  -> Building API:`);
for (endpoint in endpoints) {
  console.log(`    -> Creating ${endpoint} endpoint.`);
  apiRouter.use("/" + endpoint + "/", endpoints[endpoint]);
}
module.exports.apiRouter = apiRouter;
