// npm run task db generateEndpoint endpointName
const controllerBuilder = require("./fileGenerators/controller.js");
module.exports.paths = {
  controllers: "./server/app/controllers/"
};
module.exports.generateController = () => {
  const fs = require("fs");

  let fileName = process.argv[4] + ".js";
  let contents = controllerBuilder.template(process.argv[4]);
  console.log(`Creating controller file: ${fileName}`);
  fs.writeFile(this.paths.controllers + fileName, contents, err => {
    if (err) {
      console.log(`Error when writing new controller file:`, err);
    } else {
      console.log(`  -> Reading _controllers.js module.`);
      fs.readFile(
        this.paths.controllers + "_controllers.js",
        "utf8",
        (err, data) => {
          if (err) {
            console.log(`Error when reading controllers module:`, err);
          } else {
            let newControllerModule = data.split("\n");
            if (!newControllerModule[newControllerModule.length - 1].length) {
              newControllerModule.pop();
            }
            newControllerModule.push(
              controllerBuilder.importStatement(process.argv[4])
            );
            newControllerModule = newControllerModule.join("\n");
            console.log(`  -> Adding import to _controllers.js module.`);
            fs.writeFile(
              this.paths.controllers + "_controllers.js",
              newControllerModule,
              err => {
                if (err) {
                  console.log(`Error when adding import statement:`, err);
                } else {
                  console.log(`  -> Success. New controller built.`);
                }
              }
            );
          }
        }
      );
    }
  });
};
