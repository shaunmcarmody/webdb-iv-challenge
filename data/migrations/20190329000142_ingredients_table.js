
exports.up = knex => (
  knex.schema
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl
        .string('name', 128)
        .notNullable()
        .unique();
    })

);

exports.down = knex => knex.schema.dropTableIfExists('ingredients');
