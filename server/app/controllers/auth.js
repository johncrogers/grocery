const model = require("./../../../db/models/_models.js").users;
const express = require("express");
const authRouter = express.Router();
authRouter.post("/login", (request, response) => {
  console.log(`POST /app/login`, request.body.username);
  model.select({ username: request.body.username }).then(rows => {
    if (rows.length) {
      if (rows.length > 1) {
        console.log(`  -> ERROR: DUPLICATE USER`, rows);
        response.status(500).send();
      }
      if (rows[0].password === request.body.password) {
        console.log(`  -> Login successful.`);
        response.status(200).send();
      } else {
        console.log(
          `  -> FAILURE: Attempted to login with incorrect password.`
        );
        response.status(403).send();
      }
    } else {
      console.log(`  -> FAILURE: Attempted to login non-existant user.`);
      response.status(404).send();
    }
  });
});
authRouter.post("/signup", (request, response) => {
  console.log(`POST /app/signup`, request.body.username);
  model.select({ username: request.body.username }).then(rows => {
    if (rows.length) {
      console.log(`  -> FAILURE: Attempting to create duplicate user.`, rows);
      response.status(403).send("duplicate");
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
