exports.seed = knex => (
  knex('ingredients').insert([
    { name: 'flour' },
    { name: 'eggs' },
    { name: 'milk' },
  ])
);