module.exports.open = () => {
  const child_process = require("child_process");
  console.log(`Opening workspace:`, process.argv[2]);
  let fileName = process.argv[3];
  child_process.exec(`open ${__dirname}/personal/${fileName}.code-workspace`);
};
module.exports.create = () => {
  const fs = require("fs");
  let fileName = `./util/_workspaces/personal/${
    process.argv[3]
  }.code-workspace`;
  let path = process.argv[4];
  let contents = `{
  "folders": [
    {
      "path": "${path}"
    }
  ],
  "settings": {}
}`;
  fs.writeFile(fileName, contents, err => {
    if (err) {
      console.log(`ERROR:`, err);
    }
  });
};
