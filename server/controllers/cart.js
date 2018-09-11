const express = require("express");
const cartRouter = express.Router();
cartRouter.get('/ingredients', (request, response) => {
  console.log(`'GET cart/ingredients'`);
  response.send('GET cart/ingredients');
})
module.exports.cartRouter = cartRouter;