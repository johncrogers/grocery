const ingredientSeeds = require('../../_sampleData/ingredients.js').data;
const ingredientModel = require('../../models/ingredients.js');

console.log(`Seeding ingredients table...`);
ingredientModel.insertIngredients(ingredientSeeds);