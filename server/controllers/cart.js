const express = require("express");
const cartRouter = express.Router();
const models = require("./../../db/models/_models.js");

cartRouter.get("/ingredients", (request, response) => {
  console.log(`GET /api/cart/ingredients/`);
  console.log(`  -> query:`, request.query);
  let query = request.query;
  models.ingredients
    .select(query)
    .then(data => {
      console.log(`  -> Request success.`);
      response.status(200).json(data);
    })
    .catch(err => {
      console.log(
        `ERROR: An error occurred while retrieving ingredients.`,
        err
      );
      response.status(500).end();
    });
});

cartRouter.post("/ingredients", (request, response) => {
  console.log(`POST /api/cart/ingredients/`);
  if (!request.body) {
    response.status(400).end();
  }
  console.log(`  -> Request Body:`, JSON.stringify(request.body));
  models.ingredients
    .insert(request.body)
    .then(() => {
      console.log(`  -> Request success.`);
      response.status(200).end();
    })
    .catch(err => {
      console.log(`ERROR: An error occurred while inserting ingredients.`, err);
      response.status(500).end();
    });
});

module.exports.cartRouter = cartRouter;
