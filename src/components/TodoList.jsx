import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/outline";
import Todo from "./Todo";
import axios from "axios";

const TodoList = ({ todos, setTodos }) => {
  const [inputText, setInputText] = useState("");

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const createTodo = async (e) => {
    e.preventDefault();
    await axios.post("https://vast-ridge-58692.herokuapp.com/todo/", {
      title: inputText,
    });
    axios.get("https://vast-ridge-58692.herokuapp.com/todo/").then((result) => {
      setTodos(result.data);
    });
    setInputText("");
  };

  return (
    <div>
      <form className="w-full max-w-xl">
        <div className="flex border-b border-green-500 py-2 ">
          <input
            className="bg-transparent border-none w-full text-gray-700 mr-12 py-1 leading-tight focus:outline-none"
            type="text"
            placeholder="Create a new task"
            data-testid="input-field"
            value={inputText}
            onChange={inputTextHandler}
          />
          <button
            className="p-2 w-10 h-10 bg-green-500 hover:bg-green-700 rounded "
            type="submit"
            data-testid="submit-button"
            onClick={createTodo}
          >
            <PlusIcon className="text-white w-6 h-6" />
          </button>
        </div>
      </form>
      {todos.length === 0 && (
        <h1 className="text-3xl px-32 py-8">You have no task!</h1>
      )}
      {todos.map((todo, i) => (
        <Todo key={i} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
