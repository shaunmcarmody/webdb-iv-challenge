exports.seed = knex => (
  knex('recipes').insert([
    { name: 'pancakes', dish_id: 1 }
  ])
);