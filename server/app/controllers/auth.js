const model = require("./../../../db/models/_models.js").users;
const express = require("express");
const authRouter = express.Router();
authRouter.post("/login", (request, response) => {
  model
    .select("username", "password")
    .where("username", "=", request.body.username)
    .then(rows => {
      if (rows.length) {
        if (rows.length > 1) {
          console.log(`  -> ERROR: DUPLICATE USER`, rows);
          response.status(500).send();
        }
        if (rows[0].password === request.body.password) {
          response.status(200).send();
        } else {
          response.status(403).send();
        }
      } else {
        response.status(404).send();
      }
    });
});
authRouter.post("/signup", (request, response) => {
  model
    .select("username", "password")
    .where("username", "=", request.body.username)
    .then(rows => {
      if (rows.length) {
        console.log(`  -> ERROR: DUPLICATE USER`, rows);
        response.status(500).send("Duplicate user.");
      } else {
        model
          .insert(request.body)
          .then(() => {
            console.log(`  -> New user created.`, request.body.username);
            response.status(201).send();
          })
          .catch(err => {
            console.log(`  -> Error when creating new user.`, err);
            response.status(500).send();
          });
      }
    });
});
module.exports.authRouter = authRouter;
