
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Rivers Run Community Garden', description:'Create a community space for gardening', completed:true},
        {project_name: 'Riverside Co-op', description:'Build a sustainble Co-op', completed:true},
        {project_name: 'Installation of solar panels', description:'Install panels in home of the Simpsons', completed:true}
      ]);
    });
};
