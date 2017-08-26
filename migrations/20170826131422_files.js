exports.up = function(knex, Promise) {
  return knex.schema.createTable('files', table =>{
    table.increments('id').primary();
    table.string('fileName').notNullable().defaultTo('');
    table.string('data', 200000);
    table.integer('owner_id').index().references('owners.id').onDelete('CASCADE').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('files');
};
