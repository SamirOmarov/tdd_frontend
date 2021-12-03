import React from "react";
import { PlusIcon } from "@heroicons/react/outline";
import Todo from "./Todo";

const TodoList = ({ todos = [] }) => {
  return (
    <div>
      <form className="w-full max-w-xl">
        <div className="flex border-b border-green-500 py-2 ">
          <input
            className="bg-transparent border-none w-full text-gray-700 mr-12 py-1 leading-tight focus:outline-none"
            type="text"
            placeholder="Create a new task"
            data-testid="input-field"
            // value={}
            // onChange={}
          />
          <button
            className="p-2 w-10 h-10 bg-green-500 hover:bg-green-700 rounded "
            type="submit"
            data-testid="submit-button"
            // onClick={}
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
