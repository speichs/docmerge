exports.up = function(knex, Promise) {
  return knex.schema.createTable('client_files', table => {
    table.increments('id').primary();
    table.integer('file_id').index().references('files.id').onDelete('CASCADE').notNullable();
    table.integer('client_id').index().references('clients.id').onDelete('CASCADE').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('client_files');
};
