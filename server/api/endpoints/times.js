const model = require("./../../../db/models/_models.js").times;
const express = require("express");
const timesRouter = express.Router();
timesRouter.get("/", (request, response) => {
  console.log('GET / api / times / ');
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
        'ERROR: An error when attempting to retrieve times.',
        err
      );
      response.status(500).end();
    });
});
timesRouter.post("/", (request, response) => {
  console.log('POST / api / times / ');
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
        'ERROR: An error when attempting to insert times.',
        err
      );
      response.status(500).end();
    });
});
timesRouter.patch("/", (request, response) => {
  console.log('PATCH / api / times / ');
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
        'ERROR: An error when attempting to update times.',
        err
      );
      response.status(500).end();
    });
});
timesRouter.delete("/", (request, response) => {
  console.log('DELETE / api / times / ');
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
        'ERROR: An error when attempting to delete times.',
        err
      );
      response.status(500).end();
    });
});
module.exports.timesRouter = timesRouter;
