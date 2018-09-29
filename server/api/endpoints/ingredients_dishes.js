const model = require("./../../../db/models/_models.js").ingredients_dishes;
const express = require("express");
const ingredients_dishesRouter = express.Router();
ingredients_dishesRouter.get("/", (request, response) => {
  console.log('GET / api / ingredients_dishes / ');
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
        'ERROR: An error when attempting to retrieve ingredients_dishes.',
        err
      );
      response.status(500).end();
    });
});
ingredients_dishesRouter.post("/", (request, response) => {
  console.log('POST / api / ingredients_dishes / ');
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
        'ERROR: An error when attempting to insert ingredients_dishes.',
        err
      );
      response.status(500).end();
    });
});
ingredients_dishesRouter.patch("/", (request, response) => {
  console.log('PATCH / api / ingredients_dishes / ');
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
        'ERROR: An error when attempting to update ingredients_dishes.',
        err
      );
      response.status(500).end();
    });
});
ingredients_dishesRouter.delete("/", (request, response) => {
  console.log('DELETE / api / ingredients_dishes / ');
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
        'ERROR: An error when attempting to delete ingredients_dishes.',
        err
      );
      response.status(500).end();
    });
});
module.exports.ingredients_dishesRouter = ingredients_dishesRouter;
