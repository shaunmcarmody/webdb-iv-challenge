exports.seed = knex => (
  knex('dishes').insert([
    { name: 'breakfast' }
  ])
);