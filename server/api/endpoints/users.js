const model = require("./../../../db/models/_models.js").users;
const express = require("express");
const usersRouter = express.Router();
usersRouter.get("/", (request, response) => {
  console.log('GET / api / users / ');
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
        'ERROR: An error when attempting to retrieve users.',
        err
      );
      response.status(500).end();
    });
});
usersRouter.post("/", (request, response) => {
  console.log('POST / api / users / ');
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
        'ERROR: An error when attempting to insert users.',
        err
      );
      response.status(500).end();
    });
});
usersRouter.patch("/", (request, response) => {
  console.log('PATCH / api / users / ');
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
        'ERROR: An error when attempting to update users.',
        err
      );
      response.status(500).end();
    });
});
usersRouter.delete("/", (request, response) => {
  console.log('DELETE / api / users / ');
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
        'ERROR: An error when attempting to delete users.',
        err
      );
      response.status(500).end();
    });
});
module.exports.usersRouter = usersRouter;
