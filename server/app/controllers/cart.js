// const targetModel = require("./../../../db/models/_models.js").targetModel;
const express = require("express");
const cartRouter = express.Router();
cartRouter.get("/", (request, response) => {
  console.log('GET / app / cart / ');
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
        'ERROR: An error occurred during GET in cart controller.',
        err
      );
      response.status(500).end();
    });
});
cartRouter.post("/", (request, response) => {
  console.log('POST / app / cart / ');
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
        'ERROR: An error occurred during POST in cart controller.',
        err
      );
      response.status(500).end();
    });
});
cartRouter.patch("/", (request, response) => {
  console.log('PATCH / app / cart / ');
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
        'ERROR: An error occurred during PATCH in cart controller.',
        err
      );
      response.status(500).end();
    });
});
cartRouter.delete("/", (request, response) => {
  console.log('DELETE / app / cart / ');
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
        'ERROR: An error occurred during DELETE in cart controller.',
        err
      );
      response.status(500).end();
    });
});
module.exports.cartRouter = cartRouter;
