const controllers = require("./controllers/_controllers.js");
const express = require("express");
const appRouter = express.Router();
console.log(`  -> Building App Controllers:`);
for (controller in controllers) {
  console.log(`    -> Building ${controller} controller.`);
  appRouter.use("/" + controller + "/", controllers[controller]);
}
module.exports.appRouter = appRouter;
