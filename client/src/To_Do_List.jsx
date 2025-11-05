import React, { useState, useEffect } from "react";
import axios from "axios";
import "./To_Do_List.css";

const api = axios.create({
    baseURL: "http://localhost:3001/api/tasks",
});

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light');

  
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]); 


  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

    useEffect(() => {
        const fetchTasks = async () =>{
            try{
                const response = await api.get('/');
                setTasks(response.data);
            }catch(error){
                console.error("Error fetching tasks:", error);
            }
        };

        fetchTasks();
    }, []);

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    async function addTask() {
        if (newTask.trim() === "") return;
        try{
            const response = await api.post('/', {text: newTask});
            const createdTask = response.data;
            setTasks((t) => [createdTask, ...t]);
            setNewTask("");
        }catch(error){
            console.error("Error adding task:", error);
        }
    }

    async function deleteTask(id) {
        try{
            await api.delete(`/${id}`);
            const updateTasks = tasks.filter((task) => task._id !== id);
            setTasks(updateTasks);
        }catch(error){
            console.error("Error deleting task:", error);
        }
    }

    async function toggleComplete(taskToUpdate){
        try{
            const response = await api.put(`/${taskToUpdate._id}`, {
                isCompleted: !taskToUpdate.isCompleted,
            });
            const updatedTask = response.data;
            setTasks(
                tasks.map((task) => 
                task._id === updatedTask._id ? updatedTask : task
                )       
            );
        }catch(error){
            console.error("Error updating task:", error);
        }
    }

    return (
    
    <div className="todo-list">
      <div className="header-container">
        <h1>To-Do-List</h1>
       
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>

      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={handleInputChange}
      />
      <button className="add-button" onClick={addTask}>
        Add Task
      </button>

      <div className="tasks">
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => toggleComplete(task)}
              />
              <span
                className={
                  task.isCompleted ? "task-name completed" : "task-name"
                }
              >
                {task.text}
              </span>
              <button
                className="delete-button"
                onClick={() => deleteTask(task._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

}

export default ToDoList