const model = require("./../../../db/models/_models.js").dishes_meals;
const express = require("express");
const dishes_mealsRouter = express.Router();
dishes_mealsRouter.get("/", (request, response) => {
  console.log('GET / api / dishes_meals / ');
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
        'ERROR: An error when attempting to retrieve dishes_meals.',
        err
      );
      response.status(500).end();
    });
});
dishes_mealsRouter.post("/", (request, response) => {
  console.log('POST / api / dishes_meals / ');
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
        'ERROR: An error when attempting to insert dishes_meals.',
        err
      );
      response.status(500).end();
    });
});
dishes_mealsRouter.patch("/", (request, response) => {
  console.log('PATCH / api / dishes_meals / ');
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
        'ERROR: An error when attempting to update dishes_meals.',
        err
      );
      response.status(500).end();
    });
});
dishes_mealsRouter.delete("/", (request, response) => {
  console.log('DELETE / api / dishes_meals / ');
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
        'ERROR: An error when attempting to delete dishes_meals.',
        err
      );
      response.status(500).end();
    });
});
module.exports.dishes_mealsRouter = dishes_mealsRouter;
