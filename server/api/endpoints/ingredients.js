const model = require("./../../../db/models/_models.js").ingredients;
const express = require("express");
const ingredientsRouter = express.Router();
ingredientsRouter.get("/", (request, response) => {
  console.log(`GET /api/ingredients/`);
  console.log(`  -> query:`, request.query);
  let query = request.query;
  model
    .select(query)
    .then(data => {
      console.log(`  -> Request success.`);
      response.status(200).json(data);
    })
    .catch(err => {
      console.log(
        `ERROR: An error when attempting to retrieve ingredients.`,
        err
      );
      response.status(500).end();
    });
});
ingredientsRouter.post("/", (request, response) => {
  console.log(`POST /api/ingredients/`);
  if (!request.body) {
    response.status(400).end();
  }
  console.log(`  -> Request Body:`, JSON.stringify(request.body));
  model
    .insert(request.body)
    .then(() => {
      console.log(`  -> Request success.`);
      response.status(200).end();
    })
    .catch(err => {
      console.log(
        `ERROR: An error when attempting to insert ingredients.`,
        err
      );
      response.status(500).end();
    });
});
ingredientsRouter.patch("/", (request, response) => {
  console.log(`PATCH /api/ingredients/`);
  if (!request.body) {
    response.status(400).end();
  }
  console.log(`  -> Request Body:`, JSON.stringify(request.body));
  let query = request.body.query;
  let change = request.body.change;
  model
    .update(query, change)
    .then(() => {
      console.log(`  -> Request success.`);
      response.status(200).end();
    })
    .catch(err => {
      console.log(
        `ERROR: An error when attempting to update ingredients.`,
        err
      );
      response.status(500).end();
    });
});
ingredientsRouter.delete("/", (request, response) => {
  console.log(`DELETE /api/ingredients/`);
  if (!request.body) {
    response.status(400).end();
  }
  console.log(`  -> Request Body:`, JSON.stringify(request.body));
  let query = request.body.query;
  model
    .delete(query)
    .then(() => {
      console.log(`  -> Request success.`);
      response.status(200).end();
    })
    .catch(err => {
      console.log(
        `ERROR: An error when attempting to delete ingredients.`,
        err
      );
      response.status(500).end();
    });
});
module.exports.ingredientsRouter = ingredientsRouter;
