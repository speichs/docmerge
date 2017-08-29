exports.up = function(knex, Promise) {
  return knex.schema.createTable('files', table => {
    table.increments('id').primary();
    table.string('name').notNullable().defaultTo('');
    table.json('data')
    table.integer('owner_id').index().references('users.id').onDelete('CASCADE').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('files');
};
