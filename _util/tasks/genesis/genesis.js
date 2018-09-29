// npm run task genesis generate tableName
module.exports.generate = () => {
  const { execSync } = require("child_process");
  let tableName = process.argv[4];
  let commands = [
    `npm run task db generateSchema ${tableName}`,
    `npm run task db generateModel ${tableName}`,
    `npm run task api generateEndpoint ${tableName}`,
    `npm run task db create ${tableName}`
  ];
  commands.forEach(command => {
    execSync(command);
  });
};
