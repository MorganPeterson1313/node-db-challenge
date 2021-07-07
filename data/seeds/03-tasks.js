
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'add solar panels', notes:'make homes use solar power as energy', completed: true, project_id:1},
        {description: 'buy seed', notes:'purchase seeds from home depot', completed: true, project_id:2},
        {description: 'hire architect', notes:'look in the yellow book', completed: true, project_id:3}
      ]);
    });
};
