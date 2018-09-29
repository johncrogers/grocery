module.exports.importStatement = endpointName => {
  return `module.exports.${endpointName} = require("./${endpointName}.js").${endpointName}Router;`;
};
module.exports.template = endpointName => {
  return `const model = require("./../../../db/models/_models.js").${endpointName};
const express = require("express");
const ${endpointName}Router = express.Router();
${endpointName}Router.get("/", (request, response) => {
  console.log('GET / api / ${endpointName} / ');
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
        'ERROR: An error when attempting to retrieve ${endpointName}.',
        err
      );
      response.status(500).end();
    });
});
${endpointName}Router.post("/", (request, response) => {
  console.log('POST / api / ${endpointName} / ');
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
        'ERROR: An error when attempting to insert ${endpointName}.',
        err
      );
      response.status(500).end();
    });
});
${endpointName}Router.patch("/", (request, response) => {
  console.log('PATCH / api / ${endpointName} / ');
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
        'ERROR: An error when attempting to update ${endpointName}.',
        err
      );
      response.status(500).end();
    });
});
${endpointName}Router.delete("/", (request, response) => {
  console.log('DELETE / api / ${endpointName} / ');
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
        'ERROR: An error when attempting to delete ${endpointName}.',
        err
      );
      response.status(500).end();
    });
});
module.exports.${endpointName}Router = ${endpointName}Router;
`;
};
