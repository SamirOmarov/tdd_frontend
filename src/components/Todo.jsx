import React from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import axios from "axios";

const Todo = ({ todo, setTodos, id }) => {
  const deleteTodo = async (e) => {
    e.preventDefault();
    await axios.delete(
      "https://vast-ridge-58692.herokuapp.com/todo/" + id,
      {}
    );
    axios.get("https://vast-ridge-58692.herokuapp.com/todo/").then((result) => {
      setTodos(result.data);
    });
  };
  return (
    <div className="flex justify-center items-center relative mx-auto py-4 w-full max-w-lg todo">
      <button
        data-testid="complete-button"
        type="submit"
        className="mr-4 p-1 flex shadow-sm rounded-lg w-8 h-8 bg-green-500 hover:bg-green-600"
        onClick={deleteTodo}
      >
        <CheckCircleIcon className="w-6 text-black" />
      </button>
      <h1>{todo.title} </h1>
    </div>
  );
};

export default Todo;
