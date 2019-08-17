
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'Solar Panles', description:'Panels needed to harness solar power', project_id: 1},
        {resource_name: 'Plot of land', description:'land needed for development', project_id: 2},
        {resource_name: 'Human Resources', description:'labor needed for developemnt', project_id: 3}
      ]);
    });
};
