const express = require("express");
const cartRouter = express.Router();
const models = require('./../../db/models/_models.js');

cartRouter.get('/ingredients', (request, response) => {
  models.ingredients.selectIngredients().then((data) => {
    response.status(200).json(data);
  }).catch((err) => {
    console.log(`ERROR: GET /cart/ingredients`, err);
    response.status(500).end();
  });
})
module.exports.cartRouter = cartRouter;