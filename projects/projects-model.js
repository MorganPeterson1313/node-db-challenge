const db = require('../data/db-config');




module.exports ={
    find,
    addProject,
    findById,
    findResources,
    addResource,
    findTasks,
    addTask
}


function find (){
    return db('projects');
}

function findById(id){
    return db('projects')
            .where({id})
            .first();

}

async function addProject (project) {
    const [id] = await db('projects').insert(project);
    return findById(id);

}

// async function findResources (){
// return db('resources');
// }
async function findResources(id) {
    return db("resources as r")
      .join("projects as p", "r.project_id", "p.id")
      .select("r.id", "p.project_name", "r.resource_name", "r.description")
      .where({ project_id: id });
  

}

async function addResource (resource) {
    // const [id] = await db('resources').insert(resource);
    // return findById(id);
    return db('resources')
    .insert(resource)
    .then(ids => {
      return getById(ids[0]);
    });

}

async function findTasks (id){
    return db("tasks as t")
    .join("projects as p", "t.project_id", "p.id")
    .select("t.id", "p.project_name", "t.notes", "t.description")
    .where({ project_id: id });
    
    }

    async function addTask (task) {
        //  const [id] = await db('tasks').insert(task);
        //  return findById(id);
         return db('tasks')
        .insert(task)
        // .where({id })
        // .first();
        .then(ids => {
          return findById(ids[0]);
        });
    
    }

    