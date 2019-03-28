exports.seed = knex => (
  knex('ingredients').insert([
    { name: '100g' },
    { name: '2' },
    { name: '300ml' },
  ])
);