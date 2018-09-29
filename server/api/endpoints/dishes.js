const model = require("./../../../db/models/_models.js").dishes;
const express = require("express");
const dishesRouter = express.Router();
dishesRouter.get("/", (request, response) => {
  console.log('GET / api / dishes / ');
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
        'ERROR: An error when attempting to retrieve dishes.',
        err
      );
      response.status(500).end();
    });
});
dishesRouter.post("/", (request, response) => {
  console.log('POST / api / dishes / ');
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
        'ERROR: An error when attempting to insert dishes.',
        err
      );
      response.status(500).end();
    });
});
dishesRouter.patch("/", (request, response) => {
  console.log('PATCH / api / dishes / ');
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
        'ERROR: An error when attempting to update dishes.',
        err
      );
      response.status(500).end();
    });
});
dishesRouter.delete("/", (request, response) => {
  console.log('DELETE / api / dishes / ');
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
        'ERROR: An error when attempting to delete dishes.',
        err
      );
      response.status(500).end();
    });
});
module.exports.dishesRouter = dishesRouter;
