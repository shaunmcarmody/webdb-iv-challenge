
exports.up = knex => (
  knex.schema
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
        .float('amount')
        .notNullable()
      tbl
        .string('measurement')
        .notNullable();
    })
);

exports.down = knex => knex.schema.dropTableIfExists('recipes_ingredients')
