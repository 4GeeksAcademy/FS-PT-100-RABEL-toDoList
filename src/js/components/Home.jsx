import React from "react";

import Todolist from "./TodoList"
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";


//create your first component
const Home = () => {
	return (

		<div className="container mt-5">

			<h1 className="text-center mb-4">Lista de Tareas</h1>

			<Todolist />

		</div>
	);
};

export default Home;