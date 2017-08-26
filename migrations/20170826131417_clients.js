exports.up = function(knex, Promise) {
  return knex.schema.createTable('clients', table =>{
    table.increments('id').primary();
    table.string('firstName').notNullable().defaultTo('');
    table.string('lastName').notNullable().defaultTo('');
    table.string('email').notNullable().defaultTo('');
    table.specificType('hashedPassword', 'char(60)').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('clients');
};
