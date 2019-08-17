const express = require('express');

const db = require('./projects-model');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
      const projects = await db.find();
      res.json(projects);
    } catch (err) {
      res.status(500).json({ message: 'Failed to get projects' });
    }
  });


  router.get('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const project = await db.findById(id);
  
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ message: 'Could not find project with given id.' })
      }
    } catch (err) {
      res.status(500).json({ message: 'Failed to get project' });
    }
  });
  

  router.post('/', async (req, res) => {
    const projectData = req.body;
  
    try {
      const project = await db.addProject(projectData);
      res.status(201).json(project);
    } catch (err) {
      res.status(500).json({ message: 'Failed to create new project' });
    }
  });


  
  router.get('/:id/resources', async (req, res) => {
    const { id } = req.params;
  
    try {
      const resources = await db.findResources(id);
  
      if (resources) {
        res.json(resources);
      } else {
        res.status(404).json({ message: 'Could not find resources for given project' })
      }
    } catch (err) {
      res.status(500).json({ message: 'Failed to get resources' });
    }
  });
  
  router.post('/:id/resources', async (req, res) => {
    const resourceData = req.body;
    const { id } = req.params; 
  
    try {
      const resource = await db.findById(id);
  
      if (resource) {
        const resource = await db.addResource(resourceData, id);
        res.status(201).json(resource);
      } else {
        res.status(404).json({ message: 'Could not find resource with given id.' })
      }
    } catch (err) {
      res.status(500).json({ message: 'Failed to create new resource' });
    }
  });

  router.get('/:id/tasks', async (req, res) => {
    const { id } = req.params;
  
    try {
      const tasks = await db.findTasks(id);
  
      if (tasks) {
        res.json(tasks);
      } else {
        res.status(404).json({ message: 'Could not find tasks for given project' })
      }
    } catch (err) {
      res.status(500).json({ message: 'Failed to get tasks' });
    }
  });



  router.post('/:id/tasks', async (req, res) => {
    const taskData = req.body;
    const { id } = req.params; 
  
    try {
      const task = await db.findById(id);
  
      if (task) {
        const task = await db.addTask(taskData, id);
        res.status(201).json(task);
      } else {
        res.status(404).json({ message: 'Could not find task with given id.' })
      }
    } catch (err) {
      res.status(500).json({ message: 'Failed to create new task' });
    }
  });





module.exports = router;