const db = require('../data/dbConfig.js');

const getRecipes = () => db('recipes');

const addRecipe = recipe => (
  db('recipes')
    .insert(recipe)
    .then(ids => ids[0])
);

module.exports = {
  getRecipes,
  addRecipe,
}