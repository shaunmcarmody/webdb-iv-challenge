
exports.up = knex => (
  knex.schema
    .createTable('recipes', tbl => {
      // the dishes table must be created before this recipes table is created
      tbl.increments();
      tbl
        .string('name', 128)
        .notNullable()
        .unique();

      tbl
        .integer('dish_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes')
        .onDelete('CASCADE') // explain how cascading works
        .onUpdate('CASCADE');

      tbl
        .string('instructions')
        .notNullable()
    })
);

exports.down = knex => knex.schema.dropTableIfExists('recipes')
