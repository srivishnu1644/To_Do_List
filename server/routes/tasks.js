const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

router.get('/', async (req, res) =>{
    try{
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.json(tasks);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async(req, res) =>{

    const task = new Task({
        text: req.body.text
    });

    try{
        const newTask = await task.save();
        res.status(201).json(newTask);
    }catch(err){
        const newTask = await task.save();
        res.status(400).json({ message: err.message });
    }
});

router.put('/:id', async(req, res) =>{
    try{
        const task = await Task.findById(req.params.id);
        if(task == null){
            return res.status(404).json({ message: 'Task not found' });
        }

        if(req.body.isCompleted != null){
            task.isCompleted = req.body.isCompleted;
        }

        const updateTask = await task.save();
        res.json(updateTask);
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
});

router.delete('/:id', async(req, res) =>{
    try{
        const task = await(Task.findById(req.params.id));
        if(task == null){
            return res.status(404).json({ message: 'Task not found' });
        }
        await task.deleteOne();
        res.json({ message: 'Task deleted' });
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
});

module.exports = router;
