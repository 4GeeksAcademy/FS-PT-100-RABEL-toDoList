import React, { useState } from "react";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const TodoList = () => {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleKeyDown = (e) => {
        
        if(e.key === "Enter" && task.trim() !== "") {

            setTasks([...tasks, task.trim()]);
            setTask ("");
        }
    };

    const handleDelete = (index) => {

        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div className="card mx-auto" style={{ maxWidth: "500px" }}>

          <TodoInput task={task} setTask={setTask} handleKeyDown={handleKeyDown} />
    
          <ul className="list-group list-group-flush">
            {tasks.length === 0 ? (
              <li className="list-group-item text-muted">No hay tareas, añadir tareas</li>
            ) : (
              tasks.map((t, index) => (
                <TodoItem 
                key={index}
                task={t}
                index={index}
                handleDelete={handleDelete}
                />
              ))
            )}
            </ul>
    
          <div className="card-footer text-muted">
            {tasks.length} {tasks.length === 1 ? "tarea" : "tareas"}
          </div>
        </div>
      );
    };
    
    export default TodoList;