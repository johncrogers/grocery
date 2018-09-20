const express = require("express");
const authRouter = express.Router();
const models = require("../../db/models/_models.js");

// authRouter.get("/ingredients", (request, response) => {
//   console.log(`GET /api/cart/ingredients/`);
//   console.log(`  -> query:`, request.query);
//   let query = request.query;
//   models.ingredients
//     .selectIngredients(query)
//     .then(data => {
//       console.log(`  -> Request success.`);
//       response.status(200).json(data);
//     })
//     .catch(err => {
//       console.log(
//         `ERROR: An error occurred while retrieving ingredients.`,
//         err
//       );
//       response.status(500).end();
//     });
// });

authRouter.post("/users", (request, response) => {
  console.log(`POST /api/users/`);
  if (!request.body) {
    response.status(400).end();
  } else {
    let userInfo = {
      username: request.body.username,
      password: request.body.password
    };
  }
  console.log(`  -> Request Body:`, JSON.stringify(request.body));
  switch (request.body.action) {
    case "login":
      models.users
        .selectUsers(userInfo)
        .then(user => {
          console.log(`  -> Good credentials.`);
          response.status(200).json(user[0]);
        })
        .catch(err => {
          console.log(
            `ERROR: An error occurred while authenticating user.`,
            err
          );
          response.status(500).end();
        });
      break;
    case "signup":
      models.users
        .insertUsers(userInfo)
        .then(() => {
          models.users
            .selectUsers(userInfo)
            .then(user => {
              console.log(`  -> Good credentials.`);
              response.status(200).json(user[0]);
            })
            .catch(err => {
              console.log(
                `ERROR: An error occurred while authenticating user.`,
                err
              );
              response.status(500).end();
            });
        })
        .catch(err => {
          console.log(`ERROR: An error occurred while creating user.`, err);
          response.status(500).end();
        });
      break;
    default:
      break;
  }
});

module.exports.authRouter = authRouter;
