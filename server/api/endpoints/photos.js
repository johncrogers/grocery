const model = require("./../../../db/models/_models.js").photos;
const express = require("express");
const photosRouter = express.Router();
photosRouter.get("/", (request, response) => {
  console.log('GET / api / photos / ');
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
        'ERROR: An error when attempting to retrieve photos.',
        err
      );
      response.status(500).end();
    });
});
photosRouter.post("/", (request, response) => {
  console.log('POST / api / photos / ');
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
        'ERROR: An error when attempting to insert photos.',
        err
      );
      response.status(500).end();
    });
});
photosRouter.patch("/", (request, response) => {
  console.log('PATCH / api / photos / ');
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
        'ERROR: An error when attempting to update photos.',
        err
      );
      response.status(500).end();
    });
});
photosRouter.delete("/", (request, response) => {
  console.log('DELETE / api / photos / ');
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
        'ERROR: An error when attempting to delete photos.',
        err
      );
      response.status(500).end();
    });
});
module.exports.photosRouter = photosRouter;
