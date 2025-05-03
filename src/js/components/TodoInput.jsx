import React from "react";

const TodoInput = ({ task, setTask, handleKeyDown }) => {

    return (

        <input className="form-control border-0 border-bottom rounded-0" type="text" placeholder="Añadir tarea" value={task} onChange={(e) => setTask(e.target.value)} onKeyDown={handleKeyDown} />
    );
};

export default TodoInput;