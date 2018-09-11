const express = require("express");
const cartRouter = express.Router();
const model = require('./../../db/models/ingredients.js');

cartRouter.get('/ingredients', (request, response) => {
  model.selectIngredients().then((data) => {
    response.status(200).json(data);
  }).catch((err) => {
    console.log(`ERROR: GET /cart/ingredients`, err);
    response.status(500).end();
  });
})
module.exports.cartRouter = cartRouter;