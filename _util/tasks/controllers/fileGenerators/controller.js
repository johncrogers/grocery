module.exports.importStatement = controllerName => {
  return `module.exports.${controllerName} = require("./${controllerName}.js").${controllerName}Router;`;
};
module.exports.template = controllerName => {
  return `// const targetModel = require("./../../../db/models/_models.js").targetModel;
const express = require("express");
const ${controllerName}Router = express.Router();
${controllerName}Router.get("/", (request, response) => {
  console.log('GET / app / ${controllerName} / ');
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
        'ERROR: An error occurred during GET in ${controllerName} controller.',
        err
      );
      response.status(500).end();
    });
});
${controllerName}Router.post("/", (request, response) => {
  console.log('POST / app / ${controllerName} / ');
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
        'ERROR: An error occurred during POST in ${controllerName} controller.',
        err
      );
      response.status(500).end();
    });
});
${controllerName}Router.patch("/", (request, response) => {
  console.log('PATCH / app / ${controllerName} / ');
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
        'ERROR: An error occurred during PATCH in ${controllerName} controller.',
        err
      );
      response.status(500).end();
    });
});
${controllerName}Router.delete("/", (request, response) => {
  console.log('DELETE / app / ${controllerName} / ');
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
        'ERROR: An error occurred during DELETE in ${controllerName} controller.',
        err
      );
      response.status(500).end();
    });
});
module.exports.${controllerName}Router = ${controllerName}Router;
`;
};
