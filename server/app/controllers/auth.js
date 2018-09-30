const model = require("./../../../db/models/_models.js").users;
const express = require("express");
const authRouter = express.Router();
authRouter.get("/", (request, response) => {});
module.exports.authRouter = authRouter;
