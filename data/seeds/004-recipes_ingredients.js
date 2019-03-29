exports.seed = knex => (
  knex('recipes_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1, amount: 100, measurement: 'grams' },
    { recipe_id: 1, ingredient_id: 2, amount: 2, measurement: 'large' },
    { recipe_id: 1, ingredient_id: 3, amount: 300, measurement: 'ml' },
  ])
);