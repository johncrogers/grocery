const model = require("./../../../db/models/_models.js").shoppinglists;
const express = require("express");
const shoppinglistsRouter = express.Router();
shoppinglistsRouter.get("/", (request, response) => {
  console.log('GET / api / shoppinglists / ');
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
        'ERROR: An error when attempting to retrieve shoppinglists.',
        err
      );
      response.status(500).end();
    });
});
shoppinglistsRouter.post("/", (request, response) => {
  console.log('POST / api / shoppinglists / ');
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
        'ERROR: An error when attempting to insert shoppinglists.',
        err
      );
      response.status(500).end();
    });
});
shoppinglistsRouter.patch("/", (request, response) => {
  console.log('PATCH / api / shoppinglists / ');
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
        'ERROR: An error when attempting to update shoppinglists.',
        err
      );
      response.status(500).end();
    });
});
shoppinglistsRouter.delete("/", (request, response) => {
  console.log('DELETE / api / shoppinglists / ');
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
        'ERROR: An error when attempting to delete shoppinglists.',
        err
      );
      response.status(500).end();
    });
});
module.exports.shoppinglistsRouter = shoppinglistsRouter;
