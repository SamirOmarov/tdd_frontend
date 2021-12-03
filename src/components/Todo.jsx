import React from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";

const Todo = ({ todo }) => {
  return (
    <div className="flex justify-center items-center relative mx-auto py-4 w-full max-w-lg">
      <button
        data-testid="complete-button"
        type="submit"
        className="mr-4 p-1 flex shadow-sm rounded-lg w-8 h-8 bg-green-500 hover:bg-green-600"
      >
        <CheckCircleIcon className="w-6 text-black" />
      </button>
      <h1   >{todo.title} </h1>
    </div>
  );
};

export default Todo;
