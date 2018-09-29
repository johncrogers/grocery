// npm run task db generateEndpoint endpointName
const endpointBuilder = require("./fileGenerators/endpoint.js");
module.exports.paths = {
  endpoints: "./server/api/endpoints/"
};
module.exports.generateEndpoint = () => {
  const fs = require("fs");

  let fileName = process.argv[4] + ".js";
  let contents = endpointBuilder.template(process.argv[4]);
  console.log(`Creating enpoint file: ${fileName}`);
  fs.writeFile(this.paths.endpoints + fileName, contents, err => {
    if (err) {
      console.log(`Error when writing new enpoint file:`, err);
    } else {
      console.log(`  -> Reading _endpoints.js module.`);
      fs.readFile(
        this.paths.endpoints + "_endpoints.js",
        "utf8",
        (err, data) => {
          if (err) {
            console.log(`Error when reading endpoints module:`, err);
          } else {
            let newEndpointModule = data.split("\n");
            if (!newEndpointModule[newEndpointModule.length - 1].length) {
              newEndpointModule.pop();
            }
            newEndpointModule.push(
              endpointBuilder.importStatement(process.argv[4])
            );
            newEndpointModule = newEndpointModule.join("\n");
            console.log(`  -> Adding import to _endpoints.js module.`);
            fs.writeFile(
              this.paths.endpoints + "_endpoints.js",
              newEndpointModule,
              err => {
                if (err) {
                  console.log(`Error when adding import statement:`, err);
                } else {
                  console.log(`  -> Success. New endpoint built.`);
                }
              }
            );
          }
        }
      );
    }
  });
};
