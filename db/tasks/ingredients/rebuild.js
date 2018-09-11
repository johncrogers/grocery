const schemas = require('./../../schemas/ingredients.js');
const model = require('./../../models/ingredients.js');

let rebuildTasks = [
  schemas.dropTable(), schemas.createTable(), model.insertIngredients()
]

Promise.all(rebuildTasks);