exports.seed = knex => (
  knex('recipes_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1, measurement_id: 1},
    { recipe_id: 1, ingredient_id: 2, measurement_id: 2},
    { recipe_id: 1, ingredient_id: 3, measurement_id: 3},
  ])
);