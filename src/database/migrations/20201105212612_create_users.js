
exports.up = function(knex) {
  return    knex.schema.createTable('users', function(table) {
            table.increments('id').primary();
            table.string('name');
            table.string('email');
            table.timestamp('created_at').default(knex.fn.now());

  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
