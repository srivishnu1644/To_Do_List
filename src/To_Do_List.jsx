import React, { useState } from "react";
import "./To_Do_List.css";
function ToDoList() {

    const [tasks, setTasks] = useState(["eat", "sleep", "code"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() === "") return;
       setTasks(t => [...t, newTask]);
       setNewTask("");
        
    }
    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);

    }
    function moveUp(index) {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
            setTasks(updatedTasks);
        }
    }
    function moveDown(index) {
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
            setTasks(updatedTasks);
        }
    }

    return (<div className="todo-list">
        <h1>To-Do-List</h1>

        <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange} />
        <button className="add-button"onClick={addTask}>Add Task</button>
        <div className="tasks">
            <ul>
                {tasks.map((task, index) => (
                <li key={index}> 
                    <span className="task-name">{task}</span> 
                    <button className="move-up" onClick={() => moveUp(index)}> 👆</button>
                    <button className="move-down" onClick={() => moveDown(index)}>👇</button>
                    <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                </li>
))}
            </ul>
        </div>

    </div>)

}

export default ToDoList