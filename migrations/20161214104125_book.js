
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', (table) =>{
    table.increments();
    table.string('title', 150).notNullable();
    table.integer('page_count');
    table.integer('pages_read').nullable();
    table.string('programming_languages').nullable();
    table.string('author', 100);
    table.string('cover_image');





  })
};

exports.down = function(knex, Promise) {
 return knex.schema.deleteTable('book')
};
