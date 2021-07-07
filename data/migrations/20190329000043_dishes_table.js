
exports.up = knex => (
  knex.schema
    .createTable('dishes', tbl => {
      tbl.increments();
      tbl
        .string('name', 128)
        .notNullable()
        .unique();
    })
);

exports.down = knex => knex.schema.dropTableIfExists('dishes');

