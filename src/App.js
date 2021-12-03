import "./App.css";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   axios.get("https://vast-ridge-58692.herokuapp.com/todo/")
  //     .then((result) => { setTodos(result.data) })
  // }, [])

  useEffect(() => {
    const getTodos = async () => {
      const response = await axios.get("https://vast-ridge-58692.herokuapp.com/todo/")
        setTodos(response.data)
    }
    getTodos();
  }, [])

  return (
    <div className="App flex flex-col items-center">
      <h1 className="text-3xl text-gray-700 py-4">Your Todo List </h1>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
