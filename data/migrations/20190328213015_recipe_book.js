exports.up = knex => (
  // the tables most be created in the right order,
  // tables with FK are created after the referenced table is created
  knex.schema
    .createTable('dishes', tbl => {
      tbl.increments();
      tbl
        .string('name', 128)
        .notNullable()
        .unique();
    })

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
    })

    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl
        .string('name', 128)
        .notNullable()
        .unique();
    })

    .createTable('measurements', tbl => {
      tbl.increments();
      tbl
        .string('name', 128)
        .notNullable()
        .unique();
    })

    .createTable('recipes_ingredients', tbl => {
      // the recipes and ingredients tables must be created before this table is created
      tbl.increments();
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('measurement_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('measurements')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
)

exports.down = knex => (
  // tables with FK must be removed before the referenced table is removed
  knex.schema
    .dropTableIfExists('dishes')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('measurements')
    .dropTableIfExists('recipes_ingredients')
)