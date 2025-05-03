import React from "react";

const TodoItem =({ task, index, handleDelete}) => {

    return(

        <li 
        key = {index}
        className="list-group-item d-flex justify-content-between align-items-center task-item"
        >
        {task}
        <button
        className="btn btn-sm btn-danger"
        onClick={() => handleDelete(index)}
        >
          ✖  
        </button>    
        </li>
    );
};

export default TodoItem;