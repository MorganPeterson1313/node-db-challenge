
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('project_name', 128)
        .unique()
        .notNullable();
        tbl.text('description', 200)
        .unique();
        tbl.boolean('completed', false)
        .notNullable();
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('resource_name', 128)
          .unique()
          .notNullable();
          tbl.text('description', 200);
          tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      })
      .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('description', 300)
          .unique()
          .notNullable();
          tbl.text('notes', 200)
          .unique();
          tbl.boolean('completed', false)
          .notNullable();
          tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');;
      })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
};
