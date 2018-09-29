const model = require("./../../../db/models/_models.js").meals_times;
const express = require("express");
const meals_timesRouter = express.Router();
meals_timesRouter.get("/", (request, response) => {
  console.log('GET / api / meals_times / ');
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
        'ERROR: An error when attempting to retrieve meals_times.',
        err
      );
      response.status(500).end();
    });
});
meals_timesRouter.post("/", (request, response) => {
  console.log('POST / api / meals_times / ');
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
        'ERROR: An error when attempting to insert meals_times.',
        err
      );
      response.status(500).end();
    });
});
meals_timesRouter.patch("/", (request, response) => {
  console.log('PATCH / api / meals_times / ');
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
        'ERROR: An error when attempting to update meals_times.',
        err
      );
      response.status(500).end();
    });
});
meals_timesRouter.delete("/", (request, response) => {
  console.log('DELETE / api / meals_times / ');
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
        'ERROR: An error when attempting to delete meals_times.',
        err
      );
      response.status(500).end();
    });
});
module.exports.meals_timesRouter = meals_timesRouter;
