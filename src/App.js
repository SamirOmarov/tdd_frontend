import './App.css';
import TodoList from './components/TodoList';

function App() {
  const todos = [
    { id: 0, title: "Task A", completed: false },
    { id: 1, title: "Task B", completed: false },
  ];
  return (
    <div className="App flex flex-col items-center">
      <h1 className="text-3xl text-gray-700 py-4" >Your Todo List </h1>
      <TodoList  todos={todos}/>
    </div>
  );
}

export default App;
