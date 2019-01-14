
exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable('cats', (table) => {
        table.increments().primary();
        table.string('name');
        table.string('owner');
        table.string('image');
        table.string('description')
      })
    ])
  };
  
exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('cats')
    ])
  };

  