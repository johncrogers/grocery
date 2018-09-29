// npm run task genesis generate tableName
module.exports.generate = () => {
  const { execSync } = require("child_process");
  const tableName = process.argv[4];
  console.log(`GENESIS GENERATE: ${tableName}`);
  const commands = [
    `npm run task db generateSchema ${tableName}`,
    `npm run task db generateModel ${tableName}`,
    `npm run task api generateEndpoint ${tableName}`
  ];
  commands.forEach(command => {
    execSync(command, { stdio: [0, 1, 2] }, (error, stdout, stderr) => {
      if (error) {
        console.log(`GENESIS ERROR:`, err);
        console.log(stdout);
        console.log(stderr);
      }
    });
  });
};
module.exports.buildFromConfigTables = () => {
  const { execSync } = require("child_process");
  const { tables } = require("./../appConfig.js");
  Object.keys(tables).forEach(table => {
    const command = `npm run task genesis generate ${table}`;
    execSync(command, { stdio: [0, 1, 2] }, (error, stdout, stderr) => {
      if (error) {
        console.log(`GENESIS ERROR:`, err);
        console.log(stdout);
        console.log(stderr);
      }
    });
  });
};
