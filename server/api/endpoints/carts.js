const model = require("./../../../db/models/_models.js").carts;
const express = require("express");
const cartsRouter = express.Router();
cartsRouter.get("/", (request, response) => {
  console.log('GET / api / carts / ');
  console.log('  -> query: ', request.query);
  let query = request.query;
  model
    .select(query)
    .then(data => {
      console.log('  -> Request success.');
      response.status(200).json(data);
    })
    .catch(err => {
      console.log(
        'ERROR: An error when attempting to retrieve carts.',
        err
      );
      response.status(500).end();
    });
});
cartsRouter.post("/", (request, response) => {
  console.log('POST / api / carts / ');
  if (!request.body) {
    response.status(400).end();
  }
  console.log('  -> Request Body: ', JSON.stringify(request.body));
  model
    .insert(request.body)
    .then(() => {
      console.log('  -> Request success.');
      response.status(200).end();
    })
    .catch(err => {
      console.log(
        'ERROR: An error when attempting to insert carts.',
        err
      );
      response.status(500).end();
    });
});
cartsRouter.patch("/", (request, response) => {
  console.log('PATCH / api / carts / ');
  if (!request.body) {
    response.status(400).end();
  }
  console.log('  -> Request Body: ', JSON.stringify(request.body));
  let query = request.body.query;
  let change = request.body.change;
  model
    .update(query, change)
    .then(() => {
      console.log('  -> Request success.');
      response.status(200).end();
    })
    .catch(err => {
      console.log(
        'ERROR: An error when attempting to update carts.',
        err
      );
      response.status(500).end();
    });
});
cartsRouter.delete("/", (request, response) => {
  console.log('DELETE / api / carts / ');
  if (!request.body) {
    response.status(400).end();
  }
  console.log('  -> Request Body: ', JSON.stringify(request.body));
  let query = request.body.query;
  model
    .delete(query)
    .then(() => {
      console.log('  -> Request success.');
      response.status(200).end();
    })
    .catch(err => {
      console.log(
        'ERROR: An error when attempting to delete carts.',
        err
      );
      response.status(500).end();
    });
});
module.exports.cartsRouter = cartsRouter;
